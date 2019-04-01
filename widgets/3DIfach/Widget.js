define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-3DIfach',

      postCreate: function() {
        this.inherited(arguments);

      },

      startup: function() {
        this.inherited(arguments);

        console.log(this.sceneView.map.layers.items);

        //ortofotoRecortada = this.sceneView.findLayerById("16977cfb784-layer-1");
        modeloElevaciones = this.sceneView.map.layers.items[0];
        sombreadoDSM = this.sceneView.map.layers.items[1];
        sombreadoDEM = this.sceneView.map.layers.items[2];
        ortofoto = this.sceneView.map.layers.items[3];


        var vista1 = document.getElementById("ortofoto");
        vista1.innerHTML = ortofoto.title;

        vista1.onclick = function() {
          //console.log("pulsando");
          modeloElevaciones.visible = false;
          sombreadoDEM.visible = true;
          sombreadoDSM.visible = false;
          ortofoto.visible = true;
        };

        var vista2 = document.getElementById("DSM");
        vista2.innerHTML= sombreadoDSM.title;

        vista2.onclick = function() {
          modeloElevaciones.visible = false;
          sombreadoDEM.visible = false;
          sombreadoDSM.visible = true;
          ortofoto.visible = false;
        };

        var vista3 = document.getElementById("elevaciones");
        vista3.innerHTML = modeloElevaciones.title;

        vista3.onclick = function(){
          modeloElevaciones.visible = true;
          sombreadoDEM.visible = false;
          sombreadoDSM.visible = false;
          ortofoto.visible = false;
        };

        // var vista4 = document.getElementById("superficie");
        // DSM + ortofoto
        // vista4.innerHTML = *****.title;
        //
        // vista4.onclick = function(){
        //   modeloElevaciones.visible = false;
        //   sombreadoDEM.visible = false;
        //   sombreadoDSM.visible = true;
        //   ortofoto.visible = true;
        // };

      }

    });
  });
