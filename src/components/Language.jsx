/* import {Button} from "react-bootstrap"
const Language =()=>{
    // Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Define the language reload anchors
      var language = {
        eng: {
          welcome: "Welcome to the GeeksforGeeks " +
          "Portal! You can choose any language " + 
          "using the buttons above!"
        },
        es: {
          welcome: "¡Bienvenido al portal GeeksforGeeks! " +
          "¡Puedes elegir cualquier idioma usando " +
          "los botones de arriba!"
        },
        hin: {
          welcome: "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
          "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " + 
          "भाषा को चुन सकते हैं!"
        }
      };
    
      // Check if a hash value exists in the URL
      if (window.location.hash) {
    
        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#es") {
          siteContent.textContent =
            language.es.welcome;
        }
        else if (window.location.hash == "#hin") {
          siteContent.textContent =
            language.hin.welcome;
        }
      }
    return(
        <>
        <Button onclick={changeLanguage('eng')}>
          Change to English&lt; /button&gt;
        </Button>
        <Button onclick={changeLanguage('es')}>Change to Spanish</Button>
        <Button onclick={changeLanguage('hin')}>Change to Hindi</Button>
      </>
      
    )
}
export default Language */