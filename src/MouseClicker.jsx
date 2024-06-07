import aratakiItto from "./assets/aratakiItto.webp";

export function MouseClicker() {
  function handleWhoAmI(event) {
      console.log(event.target.name);
  }

  function handleSrcPrint(event) {
    console.log(event.target.src)
    event.stopPropagation()
  }

  return (
    <div>
      <button onClick={handleWhoAmI} name="one">
        <img src={aratakiItto} alt="Arataki Itto" onClick={handleSrcPrint}/>
        Who Am I?
      </button>
    </div>
  );
}
