function GoToCheckOut()
{
	var Description = document.getElementById("Description").value;
	var Amount = document.getElementById("Amount").value;
	var Currency = document.getElementById("Currency").value;
	var Country = document.getElementById("Country").value;
	var Context = document.getElementById("Context").value;

	window.location.href = "SelectPaymentMethod.md?Description=" + encodeURIComponent(Description) +
		"&Amount=" + encodeURIComponent(Amount) + "&Currency=" + encodeURIComponent(Currency) +
		"&Country=" + encodeURIComponent(Country) + "&Context=" + encodeURIComponent(Context) +
		"&Tab=" + encodeURIComponent(TabID);
}

function PaymentOk(Data)
{
	window.location.href = "PaymentOk.md?Amount=" + encodeURIComponent(Data.Amount) +
		"&Currency=" + encodeURIComponent(Data.Currency) + "&Context=" + encodeURIComponent(Data.Context);
}

function PaymentFailed(Data)
{
	window.location.href = "PaymentFailed.md?Error=" + encodeURIComponent(Data.Error) + "&Context=" + encodeURIComponent(Data.Context);
}