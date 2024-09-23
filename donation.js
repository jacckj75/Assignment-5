document.getElementById("blog-btn").addEventListener('click', function () {
    window.location.href ='/home.html';
})


document.getElementById("noakhali-btn").addEventListener('click', function () {
    const nDonate = getInputValueById ('noakhali-input');
    const totalAmount = getHtmlValueById ('total-amount');
     const nTotallDonation = getHtmlValueById ('n-totall-donation');
    
    if ((!isNaN(parseFloat(nDonate))) && nDonate > 0 && totalAmount >0 ) {
        const nDonateValue = parseFloat(nDonate);
        const newTotalDonation = nDonateValue + nTotallDonation ;
        document.getElementById("n-totall-donation").innerText = newTotalDonation
        const newTotalAmount = totalAmount - nDonateValue
        document.getElementById("total-amount").innerText = newTotalAmount
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})


document.getElementById("feni-btn").addEventListener('click', function () {
    const fDonate = getInputValueById ('feni-input');
    const totalAmount = getHtmlValueById ('total-amount');
     const fTotallDonation = getHtmlValueById ('f-totall-donation');
    
    if ((!isNaN(parseFloat(fDonate))) && fDonate > 0 && totalAmount >0 ) {
        const fDonateValue = parseFloat(fDonate);
        const newTotalDonation = fDonateValue + fTotallDonation ;
        document.getElementById("f-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - fDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})

document.getElementById("q-btn").addEventListener('click', function () {
    const qDonate = getInputValueById ('q-input');
    const totalAmount = getHtmlValueById ('total-amount');
     const qTotallDonation = getHtmlValueById ('q-totall-donation');
    
    if ((!isNaN(parseFloat(qDonate))) && qDonate > 0 && totalAmount >0 ) {
        const qDonateValue = parseFloat(qDonate);
        const newTotalDonation = qDonateValue + qTotallDonation ;
        document.getElementById("q-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - qDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
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

const historyItem = document.createElement("div");
historyItem.className = "rounded-md border border-1 ";

historyItem.innerHTML = `
<h4 class="font-bold text-base"> ${qDonate} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
<p>Date: ${new Date().toLocaleDateString}</p>
`
 document.getElementById("history").appendChild(historyItem)
