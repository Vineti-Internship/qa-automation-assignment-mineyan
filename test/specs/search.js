const assert = require('assert');

describe('Amazon', () => {
    it('should be a pending test')
    describe('Search', () =>{
        it('tablets', () => {
          browser.url("/");
          browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
          browser.element('//input[@value="Go"]').click();
        });
        it('Get name and price of tablets', () => {
          
          const tablets = [];         
          count = 0;    
          
          while( count < 15){
            const length = browser.elements("//*[@class='sx-price-whole']").value.length;   
            for(let i = 1; i < length; i++) {
              const elemOfPrice = browser.element(`//ul[@id='s-results-list-atf']/li[${i}]//span[contains(@class, 'sx-price-whole')]`);
              const elemOfNames = browser.element(`//ul[@id='s-results-list-atf']/li[${i}]//h2`);            
            
              if(elemOfPrice.isExisting() && elemOfPrice.getText() < 75) {
                const price = elemOfPrice.getText();
                const name = elemOfNames.getText();
                tablets.push({[name]: price});
                count++;             
              } 
              if(count == 15) {
                break;
              }
            }
            const nextPage = `//*[@id='pagnNextLink']/span[@id='pagnNextString']`;
            browser.waitForExist(nextPage, 10000);
            browser.element(nextPage).click();
          }

          console.log("tablets", tablets);
          console.log("count", count);
              
        });
    });
});
  