const { test, expect } = require('@playwright/test');

const testData = [
  { id: 'Pos_Fun_0001', input: 'mama dhaham paasal yanavaa', expected: 'මම දහම් පාසල් යනවා' },
  { id: 'Pos_Fun_0002', input: 'mata bath kanna oonee', expected: 'මට බත් කන්න ඕනේ' },
  { id: 'Pos_Fun_0003', input: 'api panthiyata yanavaa', expected: 'අපි පන්තියට යනවා' },

  { id: 'Pos_Fun_0004', input: 'oyaata adha dhavasa kohomadha?', expected: 'ඔයාට අද දවස කොහොමද?' },
  { id: 'Pos_Fun_0005', input: 'mama panthi yanavaa, haebaeyi vahina nisaa dhaenma yannee naehae', expected: 'මම පන්ති යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැහැ' },
  { id: 'Pos_Fun_0006', input: 'meeka hariyatama vaeda karanavaadha?', expected: 'මේක හරියටම වැඩ කරනවාද?' },

  { id: 'Pos_Fun_0007', input: 'vahaama  methanata enna', expected: 'වහාම  මෙතනට එන්න' },
  { id: 'Pos_Fun_0008', input: 'issarahata hemin yanna', expected: 'ඉස්සරහට හෙමින් යන්න' },
  { id: 'Pos_Fun_0009', input: 'mata meka gaena kiyanna', expected: 'මට මෙක ගැන කියන්න' },

  { id: 'Pos_Fun_0010', input: 'mama meka gaena dhannee naehae', expected: 'මම මෙක ගැන දන්නේ නැහැ' },
  { id: 'Pos_Fun_0011', input: 'api paanadhura yamu', expected: 'අපි පානදුර යමු' },
  { id: 'Pos_Fun_0012', input: 'meeting eka 10.30 AM valata thiyennee', expected: 'meeting එක 10.30 AM වලට තියෙන්නේ' },

  { id: 'Pos_Fun_0013', input: 'mama data check karala email ekak evannam', expected: 'මම data check කරල email එකක් එවන්නම්' },
  { id: 'Pos_Fun_0014', input: 'api heta ennee naehae', expected: 'අපි හෙට එන්නේ නැහැ' },
  { id: 'Pos_Fun_0015', input: 'meeka Rs.50000k venavaa', expected: 'මේක Rs.50000ක් වෙනවා' },

  { id: 'Pos_Fun_0016', input: 'poddak  ivasalaa inna', expected: 'පොඩ්ඩක්  ඉවසලා ඉන්න' },
  { id: 'Pos_Fun_0017', input: 'suBha naththalak!', expected: 'සුභ නත්තලක්!' },
  { id: 'Pos_Fun_0018', input: 'kohomadha adha oyaata?', expected: 'කොහොමද අද ඔයාට?' },

  { id: 'Pos_Fun_0019', input: 'ela kiri machan!', expected: 'එල කිරි මචන්!' },
  { id: 'Pos_Fun_0020', input: 'mata vathura tikak dhenna', expected: 'මට වතුර ටිකක් දෙන්න' },
  { id: 'Pos_Fun_0021', input: 'mama iiyee  oyaata kathaa kaLaa', expected: 'මම ඊයේ  ඔයාට කතා කළා' },

  { id: 'Pos_Fun_0022', input: 'mama iiyee pansal giyaa', expected: 'මම ඊයේ පන්සල් ගියා' },
  { id: 'Pos_Fun_0023', input: 'tika tika vaedi venavaa', expected: 'ටික ටික වැඩි වෙනවා' },
  { id: 'Pos_Fun_0024', input: 'mama heta gedhara enavaa', expected: 'මම හෙට ගෙදර එනවා' },

  { id: 'Neg_Fun_0001', input: 'api kaemakanna yanava', expected: 'අපි කෑම කන්න යනවා' },
  { id: 'Neg_Fun_0002', input: 'mama 123 yanavaa',   expected: 'මම 123 යනවා' },
  { id: 'Neg_Fun_0003', input: 'oyaa monavadhdhakarannee?', expected: 'ඔයා මොනවද කරන්නේ?' },

  { id: 'Neg_Fun_0004', input: 'ehema karanna baee???!!!',expected: 'එහෙම කරන්න බැයි???!!!' },
  { id: 'Neg_Fun_0005', input: 'm8, yanna hadhannee', expected: 'ම8, යන්න හදන්නේ' },
  { id: 'Neg_Fun_0006', input: 'mata samavdenna', expected: 'මට සමාව දෙන්න' },

  { id: 'Neg_Fun_0007', input: 'y', expected: 'y' },
  { id: 'Neg_Fun_0008', input: 'magee yaluvagedhara inne', expected: 'මගේ යාළුවා ගෙදර ඉන්නේ' },
  { id: 'Neg_Fun_0009', input: 'mama geya yanav',expected: 'මම ගෙදර යනව්' },

  { id: 'Neg_Fun_00010', input: 'MAMA GEDHARA YANAVAA', expected: 'මම ගෙදර යනවා' }, 
  
  { id: 'Pos_UI_0001', input: 'api enavaa', expected: 'As the user types, the output field should automatically update to "අපි එනවා' },
   ];


test.describe('Singlish to Sinhala Automation Suite', () => {
    
    for (const data of testData) {
        test(`Test Case ${data.id}: ${data.input}`, async ({ page }) => {
            test.setTimeout(80000);
            await page.goto('https://www.swifttranslator.com/');

            
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputArea.fill(data.input);
            await page.keyboard.press('Space');

          
            const outputArea = page.locator('div:has-text("Sinhala") + div.bg-slate-50, div.bg-slate-50').last();

            
            await expect(outputArea).not.toBeEmpty({ timeout: 10000 });

            
            const rawText = await outputArea.innerText();
            
           
            const cleanedActual = rawText.split('\n')[0].trim();

            console.log(`[${data.id}] Input: ${data.input}`);
            console.log(`     - Expected: ${data.expected}`);
            console.log(`     - Actual  : ${cleanedActual}`);


            expect.soft(cleanedActual).toContain(data.expected);
            
            if (cleanedActual.includes(data.expected)) {
                console.log(`     - Result  : ✅ PASS`);
            } else {
                console.log(`     - Result  : ❌ FAIL (Mismatch)`);
            }
        });
    }
});
//hkjghkjhkjhj

//gvhjjhgjh