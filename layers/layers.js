ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([601899.277606, 9130671.228331, 626059.855424, 9141729.413827]);
var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: false,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_Cleaned_2 = new ol.format.GeoJSON();
var features_Cleaned_2 = format_Cleaned_2.readFeatures(json_Cleaned_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Cleaned_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleaned_2.addFeatures(features_Cleaned_2);
var lyr_Cleaned_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cleaned_2, 
                style: style_Cleaned_2,
                popuplayertitle: 'Cleaned',
                interactive: false,
                title: '<img src="styles/legend/Cleaned_2.png" /> Cleaned'
            });
var format_Convexhulls800m_3 = new ol.format.GeoJSON();
var features_Convexhulls800m_3 = format_Convexhulls800m_3.readFeatures(json_Convexhulls800m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Convexhulls800m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Convexhulls800m_3.addFeatures(features_Convexhulls800m_3);
var lyr_Convexhulls800m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Convexhulls800m_3, 
                style: style_Convexhulls800m_3,
                popuplayertitle: 'Convex hulls 800m',
                interactive: false,
                title: '<img src="styles/legend/Convexhulls800m_3.png" /> Convex hulls 800m'
            });
var format_Convexhulls400m_4 = new ol.format.GeoJSON();
var features_Convexhulls400m_4 = format_Convexhulls400m_4.readFeatures(json_Convexhulls400m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Convexhulls400m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Convexhulls400m_4.addFeatures(features_Convexhulls400m_4);
var lyr_Convexhulls400m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Convexhulls400m_4, 
                style: style_Convexhulls400m_4,
                popuplayertitle: 'Convex hulls 400m',
                interactive: false,
                title: '<img src="styles/legend/Convexhulls400m_4.png" /> Convex hulls 400m'
            });
var format_Dissolvedarearumah_5 = new ol.format.GeoJSON();
var features_Dissolvedarearumah_5 = format_Dissolvedarearumah_5.readFeatures(json_Dissolvedarearumah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Dissolvedarearumah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolvedarearumah_5.addFeatures(features_Dissolvedarearumah_5);
var lyr_Dissolvedarearumah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolvedarearumah_5, 
                style: style_Dissolvedarearumah_5,
                popuplayertitle: 'Dissolved area rumah',
                interactive: false,
                title: '<img src="styles/legend/Dissolvedarearumah_5.png" /> Dissolved area rumah'
            });
var format_Dissolvedareakomersil_6 = new ol.format.GeoJSON();
var features_Dissolvedareakomersil_6 = format_Dissolvedareakomersil_6.readFeatures(json_Dissolvedareakomersil_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Dissolvedareakomersil_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolvedareakomersil_6.addFeatures(features_Dissolvedareakomersil_6);
var lyr_Dissolvedareakomersil_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolvedareakomersil_6, 
                style: style_Dissolvedareakomersil_6,
                popuplayertitle: 'Dissolved area komersil',
                interactive: false,
                title: '<img src="styles/legend/Dissolvedareakomersil_6.png" /> Dissolved area komersil'
            });
var format_Dissolvedareapublik_7 = new ol.format.GeoJSON();
var features_Dissolvedareapublik_7 = format_Dissolvedareapublik_7.readFeatures(json_Dissolvedareapublik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Dissolvedareapublik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolvedareapublik_7.addFeatures(features_Dissolvedareapublik_7);
var lyr_Dissolvedareapublik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolvedareapublik_7, 
                style: style_Dissolvedareapublik_7,
                popuplayertitle: 'Dissolved area publik',
                interactive: false,
                title: '<img src="styles/legend/Dissolvedareapublik_7.png" /> Dissolved area publik'
            });
var format_Halte_8 = new ol.format.GeoJSON();
var features_Halte_8 = format_Halte_8.readFeatures(json_Halte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Halte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_8.addFeatures(features_Halte_8);
var lyr_Halte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_8, 
                style: style_Halte_8,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_8.png" /> Halte'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_Cleaned_2.setVisible(true);lyr_Convexhulls800m_3.setVisible(true);lyr_Convexhulls400m_4.setVisible(true);lyr_Dissolvedarearumah_5.setVisible(true);lyr_Dissolvedareakomersil_6.setVisible(true);lyr_Dissolvedareapublik_7.setVisible(true);lyr_Halte_8.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_Batas_Administrasi_1,lyr_Cleaned_2,lyr_Convexhulls800m_3,lyr_Convexhulls400m_4,lyr_Dissolvedarearumah_5,lyr_Dissolvedareakomersil_6,lyr_Dissolvedareapublik_7,lyr_Halte_8];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS': 'LUAS', 'sum': 'sum', });
lyr_Cleaned_2.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Convexhulls800m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Convexhulls400m_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Dissolvedarearumah_5.set('fieldAliases', {'Name': 'Name', 'NAMZON': 'NAMZON', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', 'PERSENTASE': 'PERSENTASE', });
lyr_Dissolvedareakomersil_6.set('fieldAliases', {'Name': 'Name', 'NAMZON': 'NAMZON', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', 'PERSENTASE ': 'PERSENTASE ', });
lyr_Dissolvedareapublik_7.set('fieldAliases', {'Name': 'Name', 'NAMZON': 'NAMZON', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', 'PERSENTASE': 'PERSENTASE', });
lyr_Halte_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Foto': 'Foto', 'Dissolved area rumah_LUAS JANGKAUAN': 'Dissolved area rumah_LUAS JANGKAUAN', 'Dissolved area publik_LUAS JANGKAUAN': 'Dissolved area publik_LUAS JANGKAUAN', 'Dissolved area komersil_LUAS JANGKAUAN': 'Dissolved area komersil_LUAS JANGKAUAN', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS': 'TextEdit', 'sum': 'TextEdit', });
lyr_Cleaned_2.set('fieldImages', {'fid': '', 'cat': '', 'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_Convexhulls800m_3.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_Convexhulls400m_4.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_Dissolvedarearumah_5.set('fieldImages', {'Name': '', 'NAMZON': '', 'LUAS JANGKAUAN': '', 'PERSENTASE': '', });
lyr_Dissolvedareakomersil_6.set('fieldImages', {'Name': '', 'NAMZON': '', 'LUAS JANGKAUAN': '', 'PERSENTASE ': '', });
lyr_Dissolvedareapublik_7.set('fieldImages', {'Name': '', 'NAMZON': '', 'LUAS JANGKAUAN': '', 'PERSENTASE': '', });
lyr_Halte_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Foto': 'ExternalResource', 'Dissolved area rumah_LUAS JANGKAUAN': 'TextEdit', 'Dissolved area publik_LUAS JANGKAUAN': 'TextEdit', 'Dissolved area komersil_LUAS JANGKAUAN': 'TextEdit', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LUAS': 'no label', 'sum': 'no label', });
lyr_Cleaned_2.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Convexhulls800m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Convexhulls400m_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Dissolvedarearumah_5.set('fieldLabels', {'Name': 'no label', 'NAMZON': 'no label', 'LUAS JANGKAUAN': 'no label', 'PERSENTASE': 'no label', });
lyr_Dissolvedareakomersil_6.set('fieldLabels', {'Name': 'no label', 'NAMZON': 'no label', 'LUAS JANGKAUAN': 'no label', 'PERSENTASE ': 'no label', });
lyr_Dissolvedareapublik_7.set('fieldLabels', {'Name': 'no label', 'NAMZON': 'no label', 'LUAS JANGKAUAN': 'no label', 'PERSENTASE': 'no label', });
lyr_Halte_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'REMARK': 'hidden field', 'Foto': 'no label', 'Dissolved area rumah_LUAS JANGKAUAN': 'inline label - always visible', 'Dissolved area publik_LUAS JANGKAUAN': 'inline label - always visible', 'Dissolved area komersil_LUAS JANGKAUAN': 'inline label - always visible', });
lyr_Halte_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});