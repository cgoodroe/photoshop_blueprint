//This script will prompt the user to select a file, then will apply the blueprint effect to it.

//Step 1: Prompt the user to open a file
open(File(openDialog()));

//Step 2: Apply Surface Blur with a Radius of 8 and a Threshold of 50.
surfaceBlur(8,50);

//Step 3: Apply the Stylize > Find Edges effect to our image.
var idFndE = charIDToTypeID( "FndE" );
executeAction( idFndE, undefined, DialogModes.NO );

//Step 4: Invert the image
activeDocument.activeLayer.invert();

//Step 5: Desturate the image
activeDocument.activeLayer.desaturate();

//Step 6: Create new solid color fill layer
var idMk = charIDToTypeID( "Mk  " );
    var desc51 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref33 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref33.putClass( idcontentLayer );
    desc51.putReference( idnull, ref33 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc52 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc53 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc54 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc54.putDouble( idRd, 51.003113 );
                var idGrn = charIDToTypeID( "Grn " );
                desc54.putDouble( idGrn, 101.998444 );
                var idBl = charIDToTypeID( "Bl  " );
                desc54.putDouble( idBl, 153.001556 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc53.putObject( idClr, idRGBC, desc54 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc52.putObject( idType, idsolidColorLayer, desc53 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc51.putObject( idUsng, idcontentLayer, desc52 );
executeAction( idMk, desc51, DialogModes.NO );

//Step 7: screen
activeDocument.activeLayer.blendMode = BlendMode.SCREEN;

//Additional functions will be listed below.
function surfaceBlur(Radius,Threshold) {
	var desc10 = new ActionDescriptor();
	desc10.putUnitDouble( charIDToTypeID('Rds '), charIDToTypeID('#Pxl'), Radius );
	desc10.putInteger( charIDToTypeID('Thsh'), Threshold );
	executeAction( stringIDToTypeID('surfaceBlur'), desc10, DialogModes.NO );
};