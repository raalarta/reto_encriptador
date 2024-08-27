const textArea = document.querySelector(".informacion");
const mensaje = document.querySelector(".mensaje");


var mapObj={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};


	function btnEncriptar(){
		const textoEncriptado= encriptar(textArea.value)
		mensaje.value = textoEncriptado;
	}




	function btnDesencriptar(){
		const textoDesencriptado= desencriptar(textArea.value)
		mensaje.value = textoDesencriptado;
	}



			function encriptar(a){
			a = a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			a=a.toLowerCase();
			a=a.replace(/a|e|i|o|u/g, function(matched){
							return mapObj[matched];
						});

				
				return a;

					};






var mapObjDes={
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"

};


function desencriptar(a){
	
	
	a=a.replace(/ai|enter|imes|ober|ufat/g, function(matched){
					return mapObjDes[matched];
				});

		
		return a;

			}

