"use strict";

//var utils = require(__dirname + '/lib/utils');
//
//var adapter = utils.adapter('wolf');
var net = require('net');
var buffer = require('buffer');

var dec = new (require('./js/decoder.js'))();


var HOST = '0.0.0.0';
var PORT = 12004;
var ack_data = {};

//adapter.on('ready', function () {
//    main();
//});
var datapoints = {
    1: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    2: {
        name: "Betriebsart",
        type: "DPT_HVACContrMode",
        rw: "r",
        einheit: ""
    },
    3: {
        name: "Modulationsgrad  Brennerleistung",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    4: {
        name: "Kesseltemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    5: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    6: {
        name: "R�cklauftemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    7: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    8: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    9: {
        name: "Status Brenner / Flamme",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    10: {
        name: "Status Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    11: {
        name: "Status Speicherladepumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    12: {
        name: "Status 3-Wege-Umschaltventil",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    13: {
        name: "Anlagendruck",
        type: "DPT_Value_Pres",
        rw: "r",
        einheit: "Pa"
    },
    14: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    15: {
        name: "Betriebsart",
        type: "DPT_HVACContrMode",
        rw: "r",
        einheit: ""
    },
    16: {
        name: "Modulationsgrad / Brennerleistung",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    17: {
        name: "Kesseltemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    18: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    19: {
        name: "R�cklauftemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    20: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    21: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    22: {
        name: "Status Brenner / Flamme",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    23: {
        name: "Status Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    24: {
        name: "Status Speicherladepumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    25: {
        name: "Status 3-Wege-Umschaltventil",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    26: {
        name: "Anlagendruck",
        type: "DPT_Value_Pres",
        rw: "r",
        einheit: "Pa"
    },
    27: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    28: {
        name: "Betriebsart",
        type: "DPT_HVACContrMode",
        rw: "r",
        einheit: ""
    },
    29: {
        name: "Modulationsgrad / Brennerleistung",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    30: {
        name: "Kesseltemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    31: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    32: {
        name: "R�cklauftemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    33: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    34: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    35: {
        name: "Status Brenner / Flamme",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    36: {
        name: "Status Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    37: {
        name: "Status Speicherladepumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    38: {
        name: "Status 3-Wege-Umschaltventil",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    39: {
        name: "Anlagendruck",
        type: "DPT_Value_Pres",
        rw: "r",
        einheit: "Pa"
    },
    40: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    41: {
        name: "Betriebsart",
        type: "DPT_HVACContrMode",
        rw: "r",
        einheit: ""
    },
    42: {
        name: "Modulationsgrad / Brennerleistung",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    43: {
        name: "Kesseltemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    44: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    45: {
        name: "R�cklauftemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    46: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    47: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    48: {
        name: "Status Brenner / Flamme",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    49: {
        name: "Status Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    50: {
        name: "Status Speicherladepumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    51: {
        name: "Status 3-Wege-Umschaltventil",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    52: {
        name: "Anlagendruck",
        type: "DPT_Value_Pres",
        rw: "r",
        einheit: "Pa"
    },
    53: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    54: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    55: {
        name: "Raumtemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    56: {
        name: "Warmwassersolltemperatur",
        type: "DPT_Value_Temp",
        rw: "rw",
        einheit: "�C"
    },
    57: {
        name: "Programmwahl Heizkreis",
        type: "DPT_HVACMode",
        rw: "rw",
        einheit: ""
    },
    58: {
        name: "Programmwahl Warmwasser",
        type: "DPT_DHWMode",
        rw: "rw",
        einheit: ""
    },
    59: {
        name: "Heizkreis Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    60: {
        name: "Heizkreis Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    61: {
        name: "Heizkreis Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    62: {
        name: "Warmwasser Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    63: {
        name: "Warmwasser Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    64: {
        name: "Warmwasser Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    65: {
        name: "Sollwertkorrektur",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    66: {
        name: "Sparfaktor",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    67: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    68: {
        name: "Raumtemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    69: {
        name: "Warmwassersolltemperatur",
        type: "DPT_Value_Temp",
        rw: "rw",
        einheit: "�C"
    },
    70: {
        name: "Programmwahl Mischer",
        type: "DPT_HVACMode",
        rw: "rw",
        einheit: ""
    },
    71: {
        name: "Programmwahl Warmwasser",
        type: "DPT_DHWMode",
        rw: "rw",
        einheit: ""
    },
    72: {
        name: "Mischer Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    73: {
        name: "Mischer Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    74: {
        name: "Mischer Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    75: {
        name: "Warmwasser Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    76: {
        name: "Warmwasser Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    77: {
        name: "Warmwasser Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    78: {
        name: "Sollwertkorrektur",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    79: {
        name: "Sparfaktor",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    80: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    81: {
        name: "Raumtemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    82: {
        name: "Warmwassersolltemperatur",
        type: "DPT_Value_Temp",
        rw: "rw",
        einheit: "�C"
    },
    83: {
        name: "Programmwahl Mischer",
        type: "DPT_HVACMode",
        rw: "rw",
        einheit: ""
    },
    84: {
        name: "Programmwahl Warmwasser",
        type: "DPT_DHWMode",
        rw: "rw",
        einheit: ""
    },
    85: {
        name: "Mischer Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    86: {
        name: "Mischer Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    87: {
        name: "Mischer Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    88: {
        name: "Warmwasser Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    89: {
        name: "Warmwasser Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    90: {
        name: "Warmwasser Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    91: {
        name: "Sollwertkorrektur",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    92: {
        name: "Sparfaktor",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    93: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    94: {
        name: "Raumtemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    95: {
        name: "Warmwassersolltemperatur",
        type: "DPT_Value_Temp",
        rw: "rw",
        einheit: "�C"
    },
    96: {
        name: "Programmwahl Mischer",
        type: "DPT_HVACMode",
        rw: "rw",
        einheit: ""
    },
    97: {
        name: "Programmwahl Warmwasser",
        type: "DPT_DHWMode",
        rw: "rw",
        einheit: ""
    },
    98: {
        name: "Mischer Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    99: {
        name: "Mischer Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    100: {
        name: "Mischer Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    101: {
        name: "Warmwasser Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    102: {
        name: "Warmwasser Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    103: {
        name: "Warmwasser Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    104: {
        name: "Sollwertkorrektur",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    105: {
        name: "Sparfaktor",
        type: "DPT_Tempd",
        rw: "rw",
        einheit: "K"
    },
    106: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    107: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    108: {
        name: "Gesamtmodulationsgrad",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    109: {
        name: "Vorlauftemperatur Mischerkreis",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    110: {
        name: "Status Mischerkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    111: {
        name: "Status Ausgang A1",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    112: {
        name: "Eingang E1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    113: {
        name: "Eingang E2",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    114: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    115: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    116: {
        name: "Vorlauftemperatur Mischerkreis",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    117: {
        name: "Status Mischerkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    118: {
        name: "Status Ausgang A1",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    119: {
        name: "Eingang E1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    120: {
        name: "Eingang E2",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    121: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    122: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    123: {
        name: "Vorlauftemperatur Mischerkreis",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    124: {
        name: "Status Mischerkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    125: {
        name: "Status Ausgang A1",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    126: {
        name: "Eingang E1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    127: {
        name: "Eingang E2",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    128: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    129: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    130: {
        name: "Vorlauftemperatur Mischerkreis",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    131: {
        name: "Status Mischerkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    132: {
        name: "Status Ausgang A1",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    133: {
        name: "Eingang E1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    134: {
        name: "Eingang E2",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    135: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    136: {
        name: "Warmwassertemperatur Solar 1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    137: {
        name: "Temperatur Kollektor 1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    138: {
        name: "Eingang E1",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    139: {
        name: "Eingang E2 (Durchfluss)",
        type: "DPT_Value_Volume_Flow",
        rw: "r",
        einheit: "l/h"
    },
    140: {
        name: "Eingang E3",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    141: {
        name: "Status Solarkreispumpe SKP1",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    142: {
        name: "Status Ausgang A1",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    143: {
        name: "Status Ausgang A2",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    144: {
        name: "Status Ausgang A3",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    145: {
        name: "Status Ausgang A4",
        type: "DPT_Enable",
        rw: "r",
        einheit: ""
    },
    146: {
        name: "Durchfluss",
        type: "DPT_Value_Volume_Flow",
        rw: "r",
        einheit: "l/h"
    },
    147: {
        name: "aktuelle Leistung",
        type: "DPT_Power",
        rw: "r",
        einheit: "kW"
    },
    148: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    149: {
        name: "Programm",
        type: "DPT_DHWMode",
        rw: "rw",
        einheit: ""
    },
    150: {
        name: "Zeitprogramm 1",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    151: {
        name: "Zeitprogramm 2",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    152: {
        name: "Zeitprogramm 3",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    153: {
        name: "Zeitweise Intensivl�ftung AN/AUS",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    154: {
        name: "Zeitweise Intensivl�ftung Startdatum",
        type: "DPT_Date",
        rw: "rw",
        einheit: ""
    },
    155: {
        name: "Zeitweise Intensivl�ftung Enddatum",
        type: "DPT_Date",
        rw: "rw",
        einheit: ""
    },
    156: {
        name: "Zeitweise Intensivl�ftung Startzeit",
        type: "DPT_TimeOfDay",
        rw: "rw",
        einheit: ""
    },
    157: {
        name: "Zeitweise Intensivl�ftung Endzeit",
        type: "DPT_TimeOfDay",
        rw: "rw",
        einheit: ""
    },
    158: {
        name: "Zeitweiser Feuchteschutz AN/AUS",
        type: "DPT_Switch",
        rw: "rw",
        einheit: ""
    },
    159: {
        name: "Zeitweiser Feuchteschutz Startdatum",
        type: "DPT_Date",
        rw: "rw",
        einheit: ""
    },
    160: {
        name: "Zeitweiser Feuchteschutz Enddatum",
        type: "DPT_Date",
        rw: "rw",
        einheit: ""
    },
    161: {
        name: "Zeitweiser Feuchteschutz Startzeit",
        type: "DPT_TimeOfDay",
        rw: "rw",
        einheit: ""
    },
    162: {
        name: "Zeitweiser Feuchteschutz Endzeit",
        type: "DPT_TimeOfDay",
        rw: "rw",
        einheit: ""
    },
    163: {
        name: "L�ftungsstufe",
        type: "DPT_Scaling",
        rw: "r",
        einheit: "%"
    },
    164: {
        name: "Ablufttemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    165: {
        name: "Frischlufttemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    166: {
        name: "Luftdurchsatz Zuluft",
        type: "DPT_FlowRate_m3/h",
        rw: "r",
        einheit: "m�/h"
    },
    167: {
        name: "Luftdurchsatz Abluft",
        type: "DPT_FlowRate_m3/h",
        rw: "r",
        einheit: "m�/h"
    },
    168: {
        name: "Bypass Initialisierung",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    169: {
        name: "Bypass �ffnet/offen",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    170: {
        name: "Bypass schlie�t/geschlossen",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    171: {
        name: "Bypass Fehler",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    172: {
        name: "Frost Status: Initialisierung/Warte",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    173: {
        name: "Frost Status: Kein Frost",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    174: {
        name: "Frost Status: Vorw�rmer",
        type: "DPT_Bool",
        rw: "r",
        einheit: ""
    },
    175: {
        name: "Frost Status: Fehler/Unausgeglichen",
        type: "DPT_Bool",
        rw: "r",
        einheit: "Heizger�t(1)"
    },
    176: {
        name: "St�rung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    177: {
        name: "Betriebsart",
        type: "DPT_HVACContrMode",
        rw: "r",
        einheit: ""
    },
    178: {
        name: "Heizleistung",
        type: "DPT_Power",
        rw: "r",
        einheit: "kW"
    },
    179: {
        name: "K�hlleistung",
        type: "DPT_Power",
        rw: "r",
        einheit: "kW"
    },
    180: {
        name: "Kesseltemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    181: {
        name: "Sammlertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    182: {
        name: "R�cklauftemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    183: {
        name: "Warmwassertemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    184: {
        name: "Au�entemperatur",
        type: "DPT_Value_Temp",
        rw: "r",
        einheit: "�C"
    },
    185: {
        name: "Status Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    186: {
        name: "Status Zubringer-/Heizkreispumpe",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    187: {
        name: "Status 3-Wege-Umschaltventil HZ/WW",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    188: {
        name: "Status 3-Wege-Umschaltventil HZ/K",
        type: "DPT_OpenClose",
        rw: "r",
        einheit: ""
    },
    189: {
        name: "Status E-Heizung",
        type: "DPT_Switch",
        rw: "r",
        einheit: ""
    },
    190: {
        name: "Anlagendruck",
        type: "DPT_Value_Pres",
        rw: "r",
        einheit: "Pa"
    }
};

function get_device(id){
    if(id >= 1 && id <= 13 ){
        return "Heizger�t(1)"
    }else if(id >= 14 && id <= 26 ){
        return "Heizger�t(2)"
    }else if(id >= 27 && id <= 39 ){
        return "Heizger�t(3)"
    }else if(id >= 40 && id <= 52 ){
        return "Heizger�t(4)"
    }else if(id >= 53 && id <= 66 ){
        return "BM(1)"
    }else if(id >= 67 && id <= 79 ){
        return "BM(2)"
    }else if(id >= 80 && id <= 92 ){
        return "BM(3)"
    }else if(id >= 93 && id <= 105 ){
        return "BM(4)"
    }else if(id >= 106 && id <= 113 ){
        return "KM(1)"
    }else if(id >= 114 && id <= 120 ){
        return "MM(1)"
    }else if(id >= 121 && id <= 127 ){
        return "MM(2)"
    }else if(id >= 128 && id <= 134 ){
        return "MM(3)"
    }else if(id >= 135 && id <= 147 ){
        return "SM(1)"
    }else if(id >= 148 && id <= 175 ){
        return "CWL"
    }else if(id >= 176 && id <= 190){
        return "Heizger�t(1)"
    }else{
        return parseInt(id);
    }

}

function decode(type,data){
    if( type == "DPT_Scaling" ){
        return dec.decodeDPT5(data)
    }else
    if(type == "DPT_Value_Temp" || type == "DPT_Value_Tempd" || type == "DPT_Value_Pres" || type == "DPT_Power" || type == "DPT_Value_Volule_Flow" ){
        return dec.decodeDPT9(data)
    }else
    if( type == "DPT_TimeOfDay" ){
        return dec.decodeDPT10(data)
    }else
    if( type == "DPT_Date" ){
        return dec.decodeDPT11(data)
    }else
    if( type == "DPT_FlowTate_m3/h" ){
        return dec.decodeDPT13(data)
    }else
    if( type == "DPT_HVAVMode" ){
        return dec.decodeDPT20(data)
    }else{
        return data.toString();
    }
}

function main() {
console.log("start")
    var buff = new Buffer(17);
    buff[0] = 0x06;
    buff[1] = 0x20;
    buff[2] = 0xF0;
    buff[3] = 0x80;
    buff[4] = 0x00;
    buff[5] = 0x15;
    buff[6] = 0x04;
    buff[7] = 0x00;
    buff[8] = 0x00;
    buff[9] = 0x00;
    buff[10] = 0xF0;
    buff[11] = 0x86;
    buff[12] = 0x00;
    buff[13] = 0x6E;
    buff[14] = 0x00;
    buff[15] = 0x00;
    buff[16] = 0x00;


    net.createServer(function (sock) {
        sock.on("connect",function(e){
            console.log(e)
        });

        sock.on('data', function (_data) {
            console.log("-------------------")

            buff[12] = _data[12];
            buff[13] = _data[13];
            sock.write(buff)
            var dp = _data.readUInt16BE(12)
            console.log(_data)
            console.log(dp)

            if (ack_data[get_device(dp)] == undefined) {

            }
            if(datapoints[dp]){
                console.log(get_device(dp))
                console.log(datapoints[dp].name);

                console.log("---")
                console.log(_data[19].toString(10))

                console.log("value: "+ decode(datapoints[dp].type, _data.slice(20)));

                //if(datapoints[dp].type == "DPT_Value_Temp"){
                //    var value = _data.readUInt16BE(20);
                //
                //    var sign = (value & 0x8000) >> 15;
                //    var exp = (value & 0x7800) >> 11;
                //    var mant = (value & 0x07ff);
                //
                //    if(sign !== 0) {
                //        mant = -(~(mant - 1) & 0x07ff);
                //    }
                //    value = (1 << exp) * 0.01 * mant;
                //    console.log(value)
                //}
            }
            //ack_data[get_device(dp)][datapoints[dp].name] = buff[20];


            console.log("-------------------")


        })


    }).listen(PORT, HOST);
}
main();