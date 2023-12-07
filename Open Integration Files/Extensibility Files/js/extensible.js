/*
 _____                             _   _____  _   _            _ _   _       _____ _____ _____ 
/  __ \                           | | / __  \| | | |          | | | | |     |  __ \_   _/  ___|
| /  \/ ___  _ __  _ __   ___  ___| |_`' / /'| |_| | ___  __ _| | |_| |__   | |  \/ | | \ `--. 
| |    / _ \| '_ \| '_ \ / _ \/ __| __| / /  |  _  |/ _ \/ _` | | __| '_ \  | | __  | |  `--. \
| \__/\ (_) | | | | | | |  __/ (__| |_./ /___| | | |  __/ (_| | | |_| | | | | |_\ \_| |_/\__/ /
 \____/\___/|_| |_|_| |_|\___|\___|\__\_____/\_| |_/\___|\__,_|_|\__|_| |_|  \____/\___/\____/ 
  
*/


function applyExtFilter(slider, filter, extFilter) {
    var in_styles;
    var zIndex = slider === 'broadband' ? 99 : 90;

    map.eachLayer(function (layer) {
        // Remove opioid health layers
        if (curr_health_measure_type === 'opioid' && slider === 'opioid') {
            if (layer.options.styles && (layer.options.styles === geo_workspace + ':opioid_health_auto')) {
                map.removeLayer(layer);
            }
        }

        // Remove health layer
        if (curr_health_measure_type === 'health' && slider === 'health') {
            if (layer.options.styles && (layer.options.styles === geo_workspace + ':health_auto')) {
                map.removeLayer(layer);
            }
        }

        // Remove health broadband layer
        if (slider === 'broadband') {
            if (layer.options.styles && layer.options.styles === geo_workspace + ':broadband_auto') {
                map.removeLayer(layer);
            }
        }
    });

    // Add opioid health measure layer
    if (curr_health_measure_type === 'opioid' && slider === 'opioid') {
        in_styles = geo_workspace + ':opioid_health_auto'
    }

    // Add health layer
    if (curr_health_measure_type === 'health' && slider === 'health') {
        in_styles = geo_workspace + ':health_auto';
    }

    // Add broadband layer
    if (slider === 'broadband') {
        in_styles = geo_workspace + ':broadband_auto';
    }

    // Paginate filters if necessary (character limit)
    var incrementer = 0;

    while (incrementer < extFilter.length) {
        var vals = extFilter.slice(incrementer, incrementer + 100);
        incrementer = incrementer + 100;

        var f = filter + " AND " + "geography_id" + " IN " + "(" + vals + ")";

        L.tileLayer.wms(geo_host + '/wms?', {
            format: 'image/png',
            transparent: true,
            cql_filter: f,
            layers: geo_space + ':' + table_name + geo_type,
            styles: in_styles
        }).setZIndex(zIndex).addTo(map);
    }

    setHash();
}

function getExtPopFilter() {
    // Get filtered open integration data from dropdown selection
    var thisExtPop_sel = $("#ov-select-extend").val();

    if (thisExtPop_sel) {
        var _extsFilter = [];
        thisExtPop_sel = thisExtPop_sel + "";
        var selection = thisExtPop_sel.split('$');
        var data_column = selection[0];
        var thisExtPopRange = selection[1].split('_');

        var extsFilter;
        var started = 0;
        for (var key in extsdata) {
            if (extsdata.hasOwnProperty(key)) {
                if (thisExtPopRange[0] < extsdata [key][data_column] && extsdata [key][data_column] < thisExtPopRange[1]) {
                    if (started == 1) {
                        extsFilter = extsFilter + ",'" + extsdata [key]["countyFIPS"] + "'";
                        _extsFilter[_extsFilter.length] = "'" + extsdata [key]["countyFIPS"] + "'";
                    } else {
                        extsFilter = "'" + extsdata [key]["countyFIPS"] + "'";
                        _extsFilter[0] = extsFilter;
                        started = 1;
                    }
                }
            }
        }

        return _extsFilter;
    } else {
        return null;
    }
}