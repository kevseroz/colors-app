import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    //her bir palette ismini id sini vs alıp alt tarafına boş  colors objecti atıyoruz.
    //böylece object içine farklı renk arrayleri getirebileceğiz
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
//buradaki for levelin her bir öğesi için colors"a empty bir array oluşturuyor.
    for ( let level of levels) {
        newPalette.colors[level] = []
    }

    for (let color of starterPalette.colors) {
        //burada starter palette içindeki renkleri alıp scale vererek 10 farklı renk 
        //seçeneği üretiyoruz, aşağıdaki chroma fonksiyonunun da yardımıyla
        //reverse etmemizin sebebi fonksiyonda koyu renkten açığa sıralıyor.
        //biz ise açıktankoyu renge sıralasın istiyoruz
        let scale = getScale(color.color, 10).reverse();
        //bu bölüm her bir öğeyi sırayla array içine push eder 
        for(let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            });
        }
    }
    return newPalette;
}

// buradaki işlem şu şekildedir "color.darken(1.4) - color- white" neden başa siyah 
//koymadığımıza gelirsek öyle olursa çok sayıda siyah renk oluyor. bunun yerine
//biz normal olan rengimizi 1.4 oranında koyultuyoruz. böylece renklerimiz sadece koyuluyor
function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor)
        .darken(1.4)
        .hex(),
        hexColor,
        end
    ];
}

//buradan bişey anlamadım ama chroma getRange fonksiyonu içindeki hexColoru alıyor
//mode ile renk skalasını ayarlıyor(galiba) colors içine tek tek yerleştiriyor.
function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette}