var banks = [];
var select = document.getElementById('inputGroupSelect');
var submit = document.getElementById('submit');
var result = document.getElementById('result');
var Loan = document.getElementById('inputLoan');
var Payment = document.getElementById('inputPayment');
var forms = document.querySelectorAll('.needs-validation');


window.onload = function () {
	banks = JSON.parse(localStorage.banks);
	BuildSelect();
};

submit.addEventListener('click', Calculate);

function BuildSelect() {
	for (var i = 0; i < banks.length; i++) {
		$('<option value="' + i + '">' + banks[i].name + '</option>').appendTo('#inputGroupSelect');
		}
}

function Calculate() {
	let Loan1 = parseInt(Loan.value, 10);
	let Payment1 = parseInt(Payment.value, 10);
	let k = select.value;
	if (Loan1 > banks[k].loan) {
		alert('Maximum Bank loan is ' + banks[k].loan + ' $');
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if (Payment1 < banks[k].payment) {
		alert('Minimum Bank down payment is ' + banks[k].payment + ' $');
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	let res = ((Loan1-Payment1)*(banks[k].rate/12)*((1+(banks[k].rate/12))**banks[k].term))/(((1+(banks[k].rate/12))**banks[k].term)-1);
	res = res.toFixed(2);

	if ((select.value >=0) && Loan1 && Payment1) {
	event.preventDefault();
	event.stopPropagation();	
	result.innerHTML = res;
	}
}

(function () {
  'use strict';  
	Array.prototype.slice.call(forms)
	.forEach(function (form) {
	  form.addEventListener('submit', function (event) {
	    if (!form.checkValidity()) {
	      event.preventDefault();
	      event.stopPropagation();
	    }

        form.classList.add('was-validated')
      }, false)
    })
})()