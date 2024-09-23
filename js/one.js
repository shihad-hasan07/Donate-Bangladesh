const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationClassList = document.getElementById('donation-btn').classList.value;
const historyClassList = document.getElementById('history-btn').classList.value;
const allDonation=document.getElementById('donation');
const allHistory=document.getElementById('history');

// click donation btn starts
document.getElementById('donation-btn')
    .addEventListener('click', function(){

        // add style in donation btn
        donationBtn.classList.add('btn', 'btn-warning', )
        historyBtn.classList.remove('btn', 'btn-warning')

        allDonation.classList.remove('hidden');
        allHistory.classList.add('hidden');


    })
// donation btn end


// click history btn starts
document.getElementById('history-btn')
    .addEventListener('click', function () {
        
        // add style in histoy btn
        donationBtn.classList.remove('btn', 'btn-warning');
        donationBtn.classList.add('border', 'rounded-xl','py-[10px]');
        historyBtn.classList.add('btn', 'btn-warning');
        
        allDonation.classList.add('hidden')
        allHistory.classList.remove('hidden')
    })
// history btn end