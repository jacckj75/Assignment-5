document.getElementById("noakhali-btn").addEventListener('click', function () {
    const nDonate = getInputValueById ('noakhali-input');
    const totalAmount = getHtmlValueById ('total-amount');
    const nTotallDonation = getHtmlValueById ('n-totall-donation');
    const h =  document.getElementById("popup")  
    if ((!isNaN(parseFloat(nDonate))) && nDonate > 0 && totalAmount >0 ) {
        const nDonateValue = parseFloat(nDonate);
        const newTotalDonation = nDonateValue + nTotallDonation ;
        document.getElementById("n-totall-donation").innerText = newTotalDonation
        const newTotalAmount = totalAmount - nDonateValue
        document.getElementById("total-amount").innerText = newTotalAmount;
        h.classList.remove('hidden')
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})
document.getElementById("popup-btn").addEventListener('click', function () {
    const h =  document.getElementById("popup")
    h.classList.add('hidden')
})


document.getElementById("feni-btn").addEventListener('click', function () {
    const fDonate = getInputValueById ('feni-input');
    const totalAmount = getHtmlValueById ('total-amount');
     const fTotallDonation = getHtmlValueById ('f-totall-donation');
     const h =  document.getElementById("popup1")   
    if ((!isNaN(parseFloat(fDonate))) && fDonate > 0 && totalAmount >0 ) {
        const fDonateValue = parseFloat(fDonate);
        const newTotalDonation = fDonateValue + fTotallDonation ;
        document.getElementById("f-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - fDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
       h.classList.remove('hidden')
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})

document.getElementById("popup-btn1").addEventListener('click', function () {
    const h =  document.getElementById("popup1")
    h.classList.add('hidden')
})

document.getElementById("q-btn").addEventListener('click', function () {
    const qDonate = getInputValueById ('q-input');
    const totalAmount = getHtmlValueById ('total-amount');
     const qTotallDonation = getHtmlValueById ('q-totall-donation');
     const h =  document.getElementById("popup2")  
    if ((!isNaN(parseFloat(qDonate))) && qDonate > 0 && totalAmount >0 ) {
        const qDonateValue = parseFloat(qDonate);
        const newTotalDonation = qDonateValue + qTotallDonation ;
        document.getElementById("q-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - qDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
        h.classList.remove('hidden')
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})

document.getElementById("popup-btn2").addEventListener('click', function () {
    const h =  document.getElementById("popup2")
    h.classList.add('hidden')
})
const donationBtn = document.getElementById("donation-btn")
const historyBtn = document.getElementById("history-btn")

document.getElementById("donation-btn").addEventListener('click', function () {
    showSectionId('donation')
    donationBtn.classList.add('bg-btn')
    historyBtn.classList.remove ('bg-btn')
})

document.getElementById("history-btn").addEventListener('click', function () {
    showSectionId('history')
    historyBtn.classList.add('bg-btn')
    donationBtn.classList.remove ('bg-btn')
})

const p = document.createElement("p");
p.classList = "rounded-md border"  ;
p.innerText = "n"

