const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationClassList = document.getElementById('donation-btn').classList.value;
const historyClassList = document.getElementById('history-btn').classList.value;
const allDonation = document.getElementById('donation');
const allHistory = document.getElementById('history');

// total balance
let totalBalance = parseFloat(document.getElementById('total-balance').innerText);


// blog page starts
document.getElementById('go-blog-page')
    .addEventListener('click',function(event){
        window. location .href = "./blog.html"
})
// blog page end


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


// card 1 starts
document.getElementById('1confirm-donate')
    .addEventListener('click', function () {

        let totalCollectedBalance = parseFloat(document.getElementById('1card-balance-collected').innerText);
        let donatedBalance = parseFloat(document.getElementById('1card-donate').value);
        if (donatedBalance >= 0 && donatedBalance !== 'string') {
            if (donatedBalance <= totalBalance) {
                totalBalance = totalBalance - donatedBalance;
                document.getElementById('total-balance').innerText = totalBalance;
                totalCollectedBalance = totalCollectedBalance + donatedBalance;
                document.getElementById('1card-balance-collected').innerText = totalCollectedBalance;
                donationModal.classList.remove('hidden');

                // add history
                const historyItem = document.createElement('div');
                historyItem.classList = "container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl";
                historyItem.innerHTML = `
                    <h2 class="font-bold text-xl mb-2">${donatedBalance} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
                    <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
                `
                // add all of the history into the history section
                allHistory.insertBefore(historyItem, allHistory.firstChild);
            }
            else {
                alert('insufficent balance');
            }
        }
        else {
            alert('Invalid input');
        }
    })
// modal click 
confirmBtn.addEventListener('click', function () {
    let sum = document.getElementById('1card-donate').value;
    donationModal.classList.add('hidden');
});
// card 1 ends


// card 2 starts
document.getElementById('2confirm-donate')
    .addEventListener('click', function () {

        let totalCollectedBalance = parseFloat(document.getElementById('2card-balance-collected').innerText);
        let donatedBalance = parseFloat(document.getElementById('2card-donate').value);
        if (donatedBalance >= 0) {
            if (donatedBalance <= totalBalance && donatedBalance !== 'string') {
                totalBalance = totalBalance - donatedBalance;
                document.getElementById('total-balance').innerText = totalBalance;
                totalCollectedBalance = totalCollectedBalance + donatedBalance;
                document.getElementById('2card-balance-collected').innerText = totalCollectedBalance;
                donationModal.classList.remove('hidden');

                // add history
                const historyItem = document.createElement('div');
                historyItem.classList = "container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl";
                historyItem.innerHTML = `
                    <h2 class="font-bold text-xl mb-2">${donatedBalance} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
                    <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
                `
                // add all of the history into the history section
                allHistory.insertBefore(historyItem, allHistory.firstChild);
            }
            else {
                alert('insufficent balance');
            }
        }
        else {
            alert('Invalid input');
        }
    })
// modal click 
confirmBtn.addEventListener('click', function () {
    let sum = document.getElementById('2card-donate').value;
    donationModal.classList.add('hidden');
});
// card 2 ends


// card 3 starts
document.getElementById('3confirm-donate')
    .addEventListener('click', function () {

        let totalCollectedBalance = parseFloat(document.getElementById('3card-balance-collected').innerText);
        let donatedBalance = parseFloat(document.getElementById('3card-donate').value);
        if (donatedBalance >= 0 && donatedBalance !== 'string') {
            if (donatedBalance <= totalBalance) {
                totalBalance = totalBalance - donatedBalance;
                document.getElementById('total-balance').innerText = totalBalance;
                totalCollectedBalance = totalCollectedBalance + donatedBalance;
                document.getElementById('3card-balance-collected').innerText = totalCollectedBalance;
                donationModal.classList.remove('hidden');

                // add history
                const historyItem = document.createElement('div');
                historyItem.classList = "container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl";
                historyItem.innerHTML = `
                    <h2 class="font-bold text-xl mb-2">${donatedBalance} Taka is Donated for Aid for Injured in the Quota Movement</h2>
                    <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
                `
                // add all of the history into the history section
                allHistory.insertBefore(historyItem, allHistory.firstChild);
            }
            else {
                alert('insufficent balance');
            }
        }
        else {
            alert('Invalid input');
        }
    })
// modal click 
confirmBtn.addEventListener('click', function () {
    let sum = document.getElementById('3card-donate').value;
    donationModal.classList.add('hidden');
});
// card 3 ends.



// add history
const historyItem = document.createElement('div');
historyItem.classList = "container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl";
historyItem.innerHTML = `
        <h2 class="font-bold text-xl mb-2">${donatedBalance} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
    `
// add all of the history into the history section
allHistory.insertBefore(historyItem, allHistory.firstChild);



