/*
 _____                             _   _____  _   _            _ _   _       _____ _____ _____ 
/  __ \                           | | / __  \| | | |          | | | | |     |  __ \_   _/  ___|
| /  \/ ___  _ __  _ __   ___  ___| |_`' / /'| |_| | ___  __ _| | |_| |__   | |  \/ | | \ `--. 
| |    / _ \| '_ \| '_ \ / _ \/ __| __| / /  |  _  |/ _ \/ _` | | __| '_ \  | | __  | |  `--. \
| \__/\ (_) | | | | | | |  __/ (__| |_./ /___| | | |  __/ (_| | | |_| | | | | |_\ \_| |_/\__/ /
 \____/\___/|_| |_|_| |_|\___|\___|\__\_____/\_| |_/\___|\__,_|_|\__|_| |_|  \____/\___/\____/ 
  
*/

var insight_ly = {
    broadband: {
        in_bb_access: {
            name: 'Broadband Access',
            column: 'pctpopwbbacc',
            min: 0,
            max: 100,
            zindex: 99,
            step: .1,
            values: [0, 95],
            label: '% Coverage',
            tooltip: 'Percent of population with access to fixed broadband service at 25/3 mbps or higher advertised speeds, 2019.',
            slider: []
        },
        in_bb_rural_access: {
            name: 'Rural Access',
            column: 'bpr_ruralpctwaccess',
            min: 0,
            max: 100,
            zindex: 99,
            step: .1,
            values: [0, 80.2],
            label: '% Coverage',
            tooltip: 'Percent of rural population with access to fixed broadband service at 25/3 mbps or higher advertised speeds, 2019.',
            slider: []
        },
        in_bb_in_adoption: {
            name: 'Internet Adoption',
            column: 'subscription_ratio',
            min: 0,
            max: 351,
            zindex: 99,
            step: 1,
            values: [0, 84],
            label: ' Connections',
            tooltip: 'Subscribership ratio: number of fixed connections over 200kbps per 100 households, 2019.',
            slider: []
        },
        in_bb_dl_speed: {
            name: 'Download Speed',
            column: 'dl_tiers',
            min: 0,
            max: 11,
            zindex: 99,
            step: 1,
            values: [0, 7],
            label: 'Download',
            tooltip: 'Most commonly advertised maximum download speed tier, 2019.',
            slider: []
        },
        in_bb_ul_speed: {
            name: 'Upload Speed',
            column: 'ul_tiers',
            min: 0,
            max: 11,
            zindex: 99,
            step: 1,
            values: [0, 2],
            label: 'Upload',
            tooltip: 'Most commonly advertised maximum upload speed tier, 2019.',
            slider: []
        },
        in_bb_in_adoption_choro: {
            column: 'res_concxns_choro'
        }
    },
    health: {
        in_diabetes_rate: {
            name: 'Diabetes Rate',
            column: 'diabetes_pct',
            min: 0,
            max: 29.5,
            zindex: 90,
            step: .1,
            values: [0, 10.5],
            label: '% Diabetes',
            tooltip: 'Percentage of adults with diabetes.',
            slider: []
        },
        in_obs_rate: {
            name: 'Obesity Rate',
            column: 'adult_obesity_pct',
            min: 0,
            max: 58.91,
            zindex: 90,
            step: .1,
            values: [0, 29.7],
            label: '% Obesity',
            tooltip: 'Percentage of adults that report a BMI of 30 or more.',
            slider: []
        },
        in_pcp_access: {
            name: 'Physician Access',
            column: 'pcp_rate_per_100000',
            min: 0,
            max: 559.6,
            zindex: 90,
            step: .1,
            values: [0, 75.6],
            label: ' Physicians',
            tooltip: 'Primary Care Physicians per 100,000 people.',
            slider: []
        },
        in_poorfair: {
            name: 'Poor/Fair Health',
            column: 'poor_fair_health_pct',
            min: 0,
            max: 41.91,
            zindex: 90,
            step: .1,
            values: [0, 16.5],
            label: '% Poor/Fair',
            tooltip: 'Percentage of adults reporting fair or poor health (age-adjusted).',
            slider: []
        },
        in_prv_hosp: {
            name: 'Preventable Hospitalization',
            column: 'preventable_hospital_stays_per_100000',
            min: 0,
            max: 16395,
            zindex: 90,
            step: 5,
            values: [0, 4236],
            label: ' Stays',
            tooltip: 'Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees.',
            slider: []
        },
        in_sick_days: {
            name: 'Sick Days',
            column: 'poor_physical_health_days_within_last_30_days',
            min: 0,
            max: 8.3,
            zindex: 90,
            step: .1,
            values: [0, 3.7],
            label: ' Sick Days',
            tooltip: 'Average number of physically unhealthy days reported in past 30 days (age-adjusted).',
            suffix: 'days',
            slider: []
        }
    },
    opioid: {
        in_alldrugs_age_adj_mortality_rate: {
            name: 'All Drug Deaths',
            column: 'alldrugs_age_adj_mortality_rate',
            zindex: 90,
            label: ' Deaths per 100,000',
            tooltip: 'Average, age-adjusted mortality rate from all drug-related overdoses, 2015-2019.',
            stateMin: 7.5,
            stateMax: 51.1,
            countyMin: 4.0,
            countyMax: 126.3,
            slider: {county: [], state: []}
        },
        in_alldrugs_age_adj_mortality_rate_pct_change: {
            name: 'All Drug Death Trends',
            column: 'alldrugs_age_adj_mortality_rate_pct_change',
            zindex: 90,
            label: ' in Death Rate',
            tooltip: 'Percent change in average, age-adjusted mortality rate from all drug-related overdoses, 2010-2019.',
            stateMin: -14.4,
            stateMax: 177.8,
            countyMin: -63.8,
            countyMax: 247.7,
            slider: {county: [], state: []}
        },
        in_anyopioids_age_adj_mortality_rate: {
            name: 'All Opioid Deaths',
            column: 'anyopioids_age_adj_mortality_rate',
            zindex: 90,
            label: ' Deaths per 100,000',
            tooltip: 'Average, age-adjusted mortality rate from all opioid-related overdoses, 2015-2019.',
            stateMin: 3.1,
            stateMax: 42.5,
            countyMin: 1.3,
            countyMax: 114.3,
            slider: {county: [], state: []}
        },
        in_anyopioids_age_adj_mortality_rate_pct_change: {
            name: 'All Opioid Death Trends',
            column: 'anyopioids_age_adj_mortality_rate_pct_change',
            zindex: 90,
            label: ' in Death Rate',
            tooltip: 'Percent change in average, age-adjusted mortality rate from all opioid-related overdoses, 2010-2019.',
            stateMin: -28.9,
            stateMax: 259,
            countyMin: -64.8,
            countyMax: 2712.5,
            slider: {county: [], state: []}
        },
        in_prescriptionopioids_age_adj_mortality_rate: {
            name: 'Rx Opioid Deaths',
            column: 'prescriptionopioids_age_adj_mortality_rate',
            zindex: 90,
            label: ' Deaths per 100,000',
            tooltip: 'Average, age-adjusted mortality rate from all prescription opioid overdoses, 2015-2019.',
            stateMin: 1.9,
            stateMax: 16.4,
            countyMin: 0.8,
            countyMax: 45.0,
            slider: {county: [], state: []}
        },
        in_prescriptionopioids_age_adj_mortality_rate_pct_change: {
            name: 'Rx Opioid Death Trends',
            column: 'prescriptionopioids_age_adj_mortality_rate_pct_change',
            zindex: 90,
            label: ' in Death Rate',
            tooltip: 'Percent change in average, age-adjusted mortality rate from all prescription opioid overdoses, 2010-2019.',
            stateMin: -44.7,
            stateMax: 128.6,
            countyMin: -64.9,
            countyMax: 540,
            slider: {county: [], state: []}
        },
        in_syntheticopioids_age_adj_mortality_rate: {
            name: 'Synthetic Opioid Deaths',
            column: 'syntheticopioids_age_adj_mortality_rate',
            zindex: 90,
            label: ' Deaths per 100,000',
            tooltip: 'Average, age-adjusted mortality rate from all synthetic opioid overdoses, 2015-2019.',
            stateMin: 0.9,
            stateMax: 29.1,
            countyMin: 0.6,
            countyMax: 92.6,
            slider: {county: [], state: []}
        },
        in_syntheticopioids_age_adj_mortality_rate_pct_change: {
            name: 'Synthetic Opioid Death Trends',
            column: 'syntheticopioids_age_adj_mortality_rate_pct_change',
            zindex: 90,
            label: ' in Death Rate',
            tooltip: 'Percent change in average, age-adjusted mortality rate from all synthetic opioid overdoses, 2010-2019.',
            stateMin: -15.4,
            stateMax: 2466.7,
            countyMin: -20.0,
            countyMax: 4350,
            slider: {county: [], state: []}
        },
        in_heroin_age_adj_mortality_rate: {
            name: 'Heroin Deaths',
            column: 'heroin_age_adj_mortality_rate',
            zindex: 90,
            label: ' Deaths per 100,000',
            tooltip: 'Average, age-adjusted mortality rate  from all heroin overdoses, 2015-2019.',
            stateMin: 0.5,
            stateMax: 13.6,
            countyMin: 0.6,
            countyMax: 47.6,
            slider: {county: [], state: []}
        },
        in_heroin_age_adj_mortality_rate_pct_change: {
            name: 'Heroin Death Trends',
            column: 'heroin_age_adj_mortality_rate_pct_change',
            zindex: 90,
            label: ' in Death Rate',
            tooltip: 'Percent change in average, age-adjusted mortality rate from all heroin overdoses, 2010-2019.',
            stateMin: -39.5,
            stateMax: 466.7,
            countyMin: -52.3,
            countyMax: 740,
            slider: {county: [], state: []}
        },
        in_opioid_prescribing_rate: {
            name: 'Rx Rates',
            column: 'opioid_prescribing_rate',
            zindex: 90,
            label: ' Rx per 100',
            tooltip: 'Opioid prescribing patterns (rate of retail opioid prescriptions dispensed per 100 persons), 2020.',
            stateMin: 27.3,
            stateMax: 80.4,
            countyMin: 0,
            countyMax: 406.7,
            slider: {county: [], state: []}
        },
        in_opioid_prescribing_rate_pct_change: {
            name: 'Rx Trends',
            column: 'opioid_prescribing_rate_pct_change',
            zindex: 90,
            label: ' in Rx Rate',
            tooltip: 'Percent change in opioid prescribing patterns (percent change in rate of retail opioid prescriptions dispensed per 100 persons), 2019-2020.',
            stateMin: -18.3,
            stateMax: -4,
            countyMin: -100,
            countyMax: 1000,
            slider: {county: [], state: []}
        }
    },
    // Broadband tab > opioid filter slider - user setting
    bbOpioid: {
        in_alldrugs_age_adj_mortality_rate: {
            slider: {county: [], state: []}
        },
        in_alldrugs_age_adj_mortality_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
        in_anyopioids_age_adj_mortality_rate: {
            slider: {county: [], state: []}
        },
        in_anyopioids_age_adj_mortality_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
        in_prescriptionopioids_age_adj_mortality_rate: {
            slider: {county: [], state: []}
        },
        in_prescriptionopioids_age_adj_mortality_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
        in_syntheticopioids_age_adj_mortality_rate: {
            slider: {county: [], state: []}
        },
        in_syntheticopioids_age_adj_mortality_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
        in_heroin_age_adj_mortality_rate: {
            slider: {county: [], state: []}
        },
        in_heroin_age_adj_mortality_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
        in_opioid_prescribing_rate: {
            slider: {county: [], state: []}
        },
        in_opioid_prescribing_rate_pct_change: {
            slider_allTrends: {county: [], state: []},
            slider_decreasing: {county: [], state: []},
            slider_increasing: {county: [], state: []}
        },
    },
    // Data overlays
    count: {
        in_cnt_pcp: {
            name: 'Physicians',
            layer: 'c2hgis',
            column: 'pcp_total',
            style: 'pcp',
            color: '#ba0c0c',
            county: {
                min: 10,
                max: 500
            },
            state: {
                min: '1,000',
                max: '10,000'
            }
        },
        in_cnt_ip: {
            name: 'Internet Providers',
            layer: 'c2hgis',
            column: 'provcount_c',
            style: 'ip',
            color: '#0050cc',
            county: {
                min: 1,
                max: 15
            },
            state: {
                min: 10,
                max: 150
            }
        },
        in_cnt_pop: {
            name: 'Population',
            layer: 'c2hgis',
            column: 'population',
            style: 'pop',
            color: '#05ad28',
            county: {
                min: '10,000',
                max: '1&nbsp;million'
            },
            state: {
                min: '1&nbsp;million',
                max: '10&nbsp;million'
            }
        }
    }
};

// Health > Chronic disease > Health measures choropleth
var health_ly = {
    hh_diabetes_rate: {
        column: 'diabetes_pct',
        style: 'health_sec_diabetes_2023',
        ranges: '≤9.1, 9.2 - 11.0, 11.1 - 12.8, 12.9 - 15.2, >15.2',
        label: '% Diabetes',
        tooltip: 'in_diabetes_rate'
    },
    hh_obesity: {
        column: 'adult_obesity_pct',
        style: 'health_sec_obesity_2023',
        ranges: '≤28.6, 28.7 - 32.2, 32.3 - 35.1, 35.2 - 38.2, >38.2',
        label: '% Obesity',
        tooltip: 'in_obs_rate'
    },
    hh_pcppc: {
        column: 'pcp_rate_per_100000',
        style: 'health_sec_pcpacc_2023',
        ranges: '>76.0, 76.0 - 53.3, 53.3 - 39.5, 39.5 - 23.4, ≤23.4',
        label: 'PCP/100,000',
        tooltip: 'in_pcp_access'
    },
    hh_poorfair: {
        column: 'poor_fair_health_pct',
        style: 'health_sec_poorfair_2023',
        ranges: '≤15.4, 15.5 - 18.2, 18.3 - 21.0, 21.1 - 24.5, >24.5',
        label: '% Poor/Fair Health',
        tooltip: 'in_poorfair'
    },
    hh_preventhosp: {
        column: 'preventable_hospital_stays_per_100000',
        style: 'health_sec_preventhosp_2023',
        ranges: '≤3212, 3213 - 4076, 4077 - 4831, 4832 - 5813, >5813',
        label: '# Hospital Stays',
        tooltip: 'in_prv_hosp'
    },
    hh_sick_days: {
        column: 'poor_physical_health_days_within_last_30_days',
        style: 'health_sec_sickdays_2023',
        ranges: '≤3.7, 3.8 - 4.2, 4.3 - 4.6, 4.7 - 5.0, >5.0',
        label: '# Sick Days',
        tooltip: 'in_sick_days'
    },
};

// Health > Opioids > Opioid measures choropleth
var opioid_ly = {
    in_alldrugs_age_adj_mortality_rate: {
        column: 'alldrugs_age_adj_mortality_rate',
        style: 'opioid_alldrugs_mortality_2023',
        ranges: '≤13.5, 13.6 - 18.2, 18.3 - 23.6, 23.7 - 32.0, >32.0'
    },
    in_alldrugs_age_adj_mortality_rate_pct_change: {
        column: 'alldrugs_age_adj_mortality_rate_pct_change',
        style: 'opioid_alldrugs_pct_chg_2023',
        ranges: '≤-1.3, -1.2 - 19.6, 19.7 - 48.1, 48.2 - 93.8, >93.8'
    },
    in_anyopioids_age_adj_mortality_rate: {
        column: 'anyopioids_age_adj_mortality_rate',
        style: 'opioid_anyopioids_mortality_2023',
        ranges: '≤8.4, 8.5 - 13.0, 13.1 - 18.1, 18.2 - 26.1, >26.1'
    },
    in_anyopioids_age_adj_mortality_rate_pct_change: {
        column: 'anyopioids_age_adj_mortality_rate_pct_change',
        style: 'opioid_anyopioids_pct_chg_2023',
        ranges: '≤0.0, 0.1 - 38.5, 38.6 - 82.1, 82.2 - 145.1, >145.1'
    },
    in_syntheticopioids_age_adj_mortality_rate: {
        column: 'syntheticopioids_age_adj_mortality_rate',
        style: 'opioid_syntheticopioids_mortality_2023',
        ranges: '≤5.0, 5.1 - 9.0, 9.1 - 13.5, 13.6 - 21.2, >21.2'
    },
    in_syntheticopioids_age_adj_mortality_rate_pct_change: {
        column: 'syntheticopioids_age_adj_mortality_rate_pct_change',
        style: 'opioid_syntheticopioids_pct_chg_2023',
        ranges: '≤166.7, 166.8 - 484.6, 484.7 - 800.0, 800.1 - 1120.0, >1120.0'
    },
    in_prescriptionopioids_age_adj_mortality_rate: {
        column: 'prescriptionopioids_age_adj_mortality_rate',
        style: 'opioid_prescriptionopioids_mortality_2023',
        ranges: '≤3.8, 3.9 - 5.3, 5.4 - 7.5, 7.6 - 10.2, >10.2'
    },
    in_prescriptionopioids_age_adj_mortality_rate_pct_change: {
        column: 'prescriptionopioids_age_adj_mortality_rate_pct_change',
        style: 'opioid_prescriptionopioids_pct_chg_2023',
        ranges: '≤-28.1, -28.0 - -8.3, -8.2 - 10.7, 10.8 - 42.1, >42.1'
    },
    in_heroin_age_adj_mortality_rate: {
        column: 'heroin_age_adj_mortality_rate',
        style: 'opioid_heroin_mortality_2023',
        ranges: '≤3.2, 3.3 - 5.2, 5.3 - 7.6, 7.7 - 11.0, >11.0'
    },
    in_heroin_age_adj_mortality_rate_pct_change: {
        column: 'heroin_age_adj_mortality_rate_pct_change',
        style: 'opioid_heroin_pct_chg_2023',
        ranges: '≤23.3, 23.4 - 76.4, 76.5 - 127.3, 127.4 - 196.0, >196.0'
    },
    in_opioid_prescribing_rate: {
        column: 'opioid_prescribing_rate',
        style: 'opioid_prescribing_rate_2023',
        ranges: '≤15.6, 15.7 - 27.4, 27.5 - 38.5, 38.6 - 56.9, >56.9'
    },
    in_opioid_prescribing_rate_pct_change: {
        column: 'opioid_prescribing_rate_pct_change',
        style: 'opioid_prescribing_rate_pct_chg_2023',
        ranges: '≤-14.6, -14.5 - -8.7, -8.6 - -4.5, -4.4 - 1.5, >1.5'
    }
};

// Broadband tab > Fixed broadband availability tooltips
var broadband_ly = {
    fixed_access: {
        tooltip: 'Percent of population with access to fixed broadband service at 25/3 mbps or higher advertised speeds, 2019.'
    },
    wn_dl: {
        tooltip: 'Percent of population with access to fixed broadband service at 25 mbps or higher advertised download speeds, 2019.'
    },
    wn_ul: {
        tooltip: 'Percent of population with access to fixed broadband service at 3 mbps or higher advertised upload speeds, 2019.'
    },
    in_adoption: {
        tooltip: 'Subscribership ratio: number of fixed connections over 200kbps per 100 households, 2019.'
    }
};

// Demographics tab choropleth
var pop_ly = {
    pop_urbanrural: {
        column: 'rural_pct',
        style: 'pop_urbanrural',
        ranges: '≤10,10 - 20,20 - 35,35 - 50,>50',
        label: '% Rural',
        tooltip: 'Percentage of population living in a rural area.'
    },
    pop_density: {
        column: 'pop_density',
        style: 'pop_density',
        ranges: '≤25,25 - 50,50 - 100,100 - 250,>250',
        label: 'Population per sq. mile',
        tooltip: 'Population density per square mile.'
    },
    pop_age: {
        column: 'age_over_65_pct',
        style: 'pop_age_2023',
        ranges: '≤16.0, 16.1 - 18.4, 18.5 - 20.4, 20.5 - 23.2, >23.2',
        label: '% Over 65',
        tooltip: 'Percentage of population aged 65 and older.'
    },
    pop_unemploy: {
        column: 'unemployment',
        style: 'pop_unemploy_2023',
        ranges: '≤2.9, 3.0 - 3.4, 3.5 - 4.0, 4.1 - 4.9, >4.9',
        label: '% Unemployed',
        tooltip: 'Percentage of civilian population ages 16 and older unemployed but seeking work.'
    },
    pop_edu: {
        column: 'some_college',
        style: 'pop_edu_2023',
        ranges: '≤48.0, 48.1 - 55.1, 55.2 - 61.3, 61.4 - 68.6, >68.6',
        label: '% Some College',
        tooltip: 'Percentage of adults ages 25-44 with some post-secondary education.'
    }
};

// Broadband speed tiers
var bb_speed_tiers = {
    0: {
        range: '0',
        min: '0',
        max: '0'
    },
    1: {
        range: '0 - 1',
        min: '0',
        max: '1'
    },
    2: {
        range: '1 - 3',
        min: '1',
        max: '3'
    },
    3: {
        range: '3 - 4',
        min: '3',
        max: '4'
    },
    4: {
        range: '4 - 6',
        min: '4',
        max: '6'
    },
    5: {
        range: '6 - 10',
        min: '6',
        max: '10'
    },
    6: {
        range: '10 - 15',
        min: '10',
        max: '15'
    },
    7: {
        range: '15 - 25',
        min: '15',
        max: '25'
    },
    8: {
        range: '25 - 50',
        min: '25',
        max: '50'
    },
    9: {
        range: '50 - 100',
        min: '50',
        max: '100'
    },
    10: {
        range: '100 - 1,000',
        min: '100',
        max: '1,000'
    },
    11: {
        range: '> 1,000',
        min: '> 1,000',
        max: '> 1,000'
    }
};
