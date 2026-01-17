//Watermark
        L.Control.Watermark = L.Control.extend({
            onAdd: function(map) {
                var img = L.DomUtil.create('img');
                img.src = './img/logo_alpha.png';
                img.style.width = '200px';
                return img;
            }
        });
        L.control.watermark = function(opts) {
            return new L.Control.Watermark(opts);
        }
        L.control.watermark({ position: 'bottomleft' }).addTo(map);


//HOME button
        L.easyButton('<i class="fa fa-home" style="color:#792d8c"></i>', function(){
                  window.location.href = "https://alipanc.org/";
        }).addTo(map);