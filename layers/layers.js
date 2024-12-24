var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gay_1 = new ol.format.GeoJSON();
var features_Gay_1 = format_Gay_1.readFeatures(json_Gay_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gay_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gay_1.addFeatures(features_Gay_1);
var lyr_Gay_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gay_1, 
                style: style_Gay_1,
                popuplayertitle: "Gay",
                interactive: true,
                title: '<img src="styles/legend/Gay_1.png" /> Gay'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Gay_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gay_1];
lyr_Gay_1.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'Nome': 'Nome', });
lyr_Gay_1.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Gay_1.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'Nome': 'no label', });
lyr_Gay_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});