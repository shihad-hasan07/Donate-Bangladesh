const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationClassList = document.getElementById('donation-btn').classList.value;
const historyClassList = document.getElementById('history-btn').classList.value;
const allDonation = document.getElementById('donation');
const allHistory = document.getElementById('history');

// total balance
let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

// click donation btn starts
document.getElementById('donation-btn')
    .addEventListener('click', function () {

        // add/remove style in donation btn
        donationBtn.classList.add('btn', 'btn-warning',)
        historyBtn.classList.remove('btn', 'btn-warning')
        allDonation.classList.remove('hidden');
        allHistory.classList.add('hidden');
    })
// donation btn end

// click history btn starts
document.getElementById('history-btn')
    .addEventListener('click', function () {

        // add/remove style in histoy btn
        donationBtn.classList.remove('btn', 'btn-warning');
        donationBtn.classList.add('border', 'rounded-xl', 'py-[10px]');
        historyBtn.classList.add('btn', 'btn-warning');
        allDonation.classList.add('hidden')
        allHistory.classList.remove('hidden')
    })
// history btn end

// donate now btn starts
document.getElementById('1confirm-donate')
    .addEventListener('click', function () {

        let totalCollectedBalance = parseFloat(document.getElementById('1card-balance-collected').innerText);
        let donatedBalance = parseFloat(document.getElementById('1card-donate').value);
        if (donatedBalance >= 0) {
            if (donatedBalance <= totalBalance) {
                totalBalance = totalBalance - donatedBalance;
                document.getElementById('total-balance').innerText = totalBalance;
                totalCollectedBalance = totalCollectedBalance + donatedBalance;
                document.getElementById('1card-balance-collected').innerText = totalCollectedBalance;
                donationModal.classList.remove('hidden');
            }
            else {
                alert('insufficent balance');
            }
        }
        else {
            alert('Invalid input'); window.location.reload();
        }
    })
// modal click 
confirmBtn.addEventListener('click', function(){
    donationModal.classList.add('hidden');
});