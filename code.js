// primero extraigo por id todos los lementos input 
const width_height = document.getElementById('Tamaño');
const border_raius = document.getElementById('border-radius');
const desplX = document.getElementById('D-X');
const desplY = document.getElementById('D-Y');
const difuminado = document.getElementById('desenfoque');
const extensión = document.getElementById('extencion');
const boxShadowValueSpan = document.getElementById('boxShadowValue');
const Color = document.getElementById('color');

const caja = document.querySelector('.content_box'); //elemento a cambiar 

// funcion de eventos para camabiar estilos
function handleInputEvent() {
    // medidas provenientes de input tipo rango para ancho y alto
    const tamañoValue = width_height.value;
    caja.style.width = tamañoValue + 'px';
    caja.style.height = tamañoValue + 'px';

    // medidas provenientes de input tipo rango para el borde redondeado
    const borderR = border_raius.value;
    caja.style.borderRadius = borderR + 'px';

    // medidas provenientes de los input tipo rango para las propiedades de sombreado 
    const ejeX = desplX.value + 'px';
    const ejeY = desplY.value + 'px';
    const difuminar = difuminado.value + 'px';
    const tamañoBox = extensión.value + 'px';
    const cl = Color.value;

    boxShadowValueSpan.textContent = `${ejeX} ${ejeY} ${difuminar} ${tamañoBox} ${cl};`;

    const boxShadowValue = `${ejeX} ${ejeY} ${difuminar} ${tamañoBox} ${cl}`;
    caja.style.boxShadow = boxShadowValue;

    document.getElementById('widthValue').textContent = width_height.value + 'px;';
    document.getElementById('heightValue').textContent = width_height.value + 'px;';
    document.getElementById('borderValue').textContent = border_raius.value + 'px;';
}
// ejecusuines de eventos 
width_height.addEventListener('input', handleInputEvent);
border_raius.addEventListener('input', handleInputEvent);
desplX.addEventListener('input', handleInputEvent);
desplY.addEventListener('input', handleInputEvent);
difuminado.addEventListener('input', handleInputEvent);
extensión.addEventListener('input', handleInputEvent);
Color.addEventListener('input', handleInputEvent);