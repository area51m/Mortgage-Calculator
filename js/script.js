var banks = [
			{name: 'British Bank', rate: 5, loan: 1000000, payment: 535, term: 36},
			{name: 'German Bank', rate: 7, loan: 3000000, payment: 435, term: 38},
			{name: 'Italian Bank', rate: 4,	loan: 4000000, payment: 735, term: 42},
];

var table = document.getElementById('table'); 
var submit = document.getElementById('Submit');
var submitsave = document.getElementById('SubmitSave');
var delbank = document.getElementById('Delete');
var modal = document.getElementById('exampleModal');
var body = document.getElementById('body');
var fields = modal.querySelectorAll('.field');
var id;

submit.addEventListener('click', AddBank);
submitsave.addEventListener('click', SaveBank);
delbank.addEventListener('click', DelBank);

window.onload = function () {
	BuildTable();
};
window.unonload = function () {
	localStorage.banks = JSON.stringify(banks);
};

if (!localStorage.banks) {
	localStorage.banks = JSON.stringify(banks);
} else {
	banks = JSON.parse(localStorage.banks);
}

function BuildTable() {
	for (var i = 0; i < banks.length; i++) {
		let tr = document.createElement('tr');
		
		let name = document.createElement('td');
	    name.innerHTML = banks[i].name;
	    tr.appendChild(name);
	    let rate= document.createElement('td');
	    rate.innerHTML = banks[i].rate;
	    tr.appendChild(rate);
	    let loan = document.createElement('td');
	    loan.innerHTML = banks[i].loan;
	    tr.appendChild(loan);
	    let payment = document.createElement('td');
	    payment.innerHTML = banks[i].payment;
	    tr.appendChild(payment);
	    let term = document.createElement('td');
	    term.innerHTML = banks[i].term;
	    tr.appendChild(term);
	    let tdbtn = document.createElement('td');
	    let btn1 = document.createElement('button');
	    btn1.innerHTML = 'Edit/Delete';
	    btn1.classList.add('btn');
	    btn1.classList.add('btn-warning');
	    btn1.classList.add('btn-edit');
	    btn1.id = i;
	    tdbtn.appendChild(btn1);
	    tr.appendChild(tdbtn);
		
		table.appendChild(tr);		
		}
	}

function AddBank() {
	var add = {};
	add.name = inputName;
	add.rate = inputRate;
	add.loan = inputLoan;
	add.payment = inputPayment;
	add.term = inputTerm;
	banks.push(add);
	ClearTable();
	BuildTable();

	for (let i = 0; i < fields.length; i++) {
		fields[i].value='';
	}	
	add = {};
}


var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget;
});

var editmodal = new bootstrap.Modal(document.getElementById('editmodal'), {
  keyboard: false
});

document.querySelector('.table').addEventListener('click', function(e){
	if (e.target.id) {
	 id = e.target.id;
	 editmodal.show();
	 document.getElementById('editDefault01').value = banks[id].name;
	 document.getElementById('editDefault02').value = banks[id].rate;
	 document.getElementById('editDefault03').value = banks[id].loan;
	 document.getElementById('editDefault04').value = banks[id].payment;
	 document.getElementById('editDefault05').value = banks[id].term;

	 einputName = banks[id].name;
	 einputRate = banks[id].rate;
	 einputLoan = banks[id].loan;
	 einputPayment = banks[id].payment;
	 einputTerm = banks[id].term;
	}

});

function SaveBank () {
	var isTrue = confirm("Are you shure?");
	if (isTrue) {
	banks[id].name = einputName;
	banks[id].rate = einputRate;
	banks[id].loan = einputLoan;
	banks[id].payment = einputPayment;
	banks[id].term = einputTerm;
	ClearTable();
	BuildTable();

}
}

function DelBank () {
	var isTrue = confirm("Are you shure?");
	if (isTrue) {
		banks.splice(id, 1);
		ClearTable();
		BuildTable();
		}
	} 
	

function ClearTable () {
	localStorage.banks = JSON.stringify(banks);
	while (table.firstChild) {
	table.removeChild(table.firstChild);
}
}