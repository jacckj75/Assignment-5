document.getElementById("noakhali-btn").addEventListener('click', function () {
    const nDonate = getInputValueById ('noakhali-input');
    const totalAmount = getHtmlValueById ('total-amount');
    const nTotallDonation = getHtmlValueById ('n-totall-donation');
    const h =  document.getElementById("popup")  
    const date = new Date().toString()
    if ((!isNaN(parseFloat(nDonate))) && nDonate > 0 && totalAmount > 0 && nDonate < totalAmount ) {
        const nDonateValue = parseFloat(nDonate);
        const newTotalDonation = nDonateValue + nTotallDonation ;
        document.getElementById("n-totall-donation").innerText = newTotalDonation
        const newTotalAmount = totalAmount - nDonateValue
        document.getElementById("total-amount").innerText = newTotalAmount;
        h.classList.remove('hidden')
        const li = document.createElement('li')
        li.style.border = "black"
        li.style.border = "solid"
        li.style.borderRadius = "12px"
        li.style.padding = "16px"
        li.innerText = `${nDonate} Taka is Donate for Flood at Noakhali, Bangladesh 
        Date: ${date}`
        document.getElementById("history-container").appendChild(li)
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
     const date = new Date().toString() 
    if ((!isNaN(parseFloat(fDonate))) && fDonate > 0 && totalAmount > 0 && fDonate < totalAmount ) {
        const fDonateValue = parseFloat(fDonate);
        const newTotalDonation = fDonateValue + fTotallDonation ;
        document.getElementById("f-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - fDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
       h.classList.remove('hidden')
       const li = document.createElement('li')
       li.style.border = "black"
        li.style.border = "solid"
        li.style.borderRadius = "12px"
        li.style.padding = "16px"
        li.innerText = `${fDonate} Taka is Donate for Flood Relief in Feni,Bangladesh 
        Date: ${date}`
        document.getElementById("history-container").appendChild(li)
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
     const date = new Date().toString()
    if ((!isNaN(parseFloat(qDonate))) && qDonate > 0 && totalAmount > 0 && qDonate < totalAmount  ) {
        const qDonateValue = parseFloat(qDonate);
        const newTotalDonation = qDonateValue + qTotallDonation ;
        document.getElementById("q-totall-donation").innerText = newTotalDonation ;
        const newTotalAmount = totalAmount - qDonateValue ;
        document.getElementById("total-amount").innerText = newTotalAmount ;
        h.classList.remove('hidden')
        const li = document.createElement('li')
        li.style.border = "black"
        li.style.border = "solid"
        li.style.borderRadius = "12px"
        li.style.padding = "16px"
        li.innerText = `${qDonate} Taka is Aid for Injured in the Quota Movement 
        Date: ${date}`
        document.getElementById("history-container").appendChild(li)
    }
    else {
        alert  ("Invalid Donation Amount")
    }
    
})

document.getElementById("popup-btn2").addEventListener('click', function () {
    const h =  document.getElementById("popup2")
    h.classList.add('hidden')
})


document.getElementById("donation-btn").addEventListener('click', function () {
    showSectionId('donation')
    const donationBtn = document.getElementById("donation-btn")
const historyBtn = document.getElementById("history-btn")
    donationBtn.classList.add('bg-btn')
    historyBtn.classList.remove ('bg-btn')
})

document.getElementById("history-btn").addEventListener('click', function () {
    showSectionId('history-container')
    const donationBtn = document.getElementById("donation-btn")
const historyBtn = document.getElementById("history-btn")
    historyBtn.classList.add('bg-btn')
    donationBtn.classList.remove ('bg-btn')
})



