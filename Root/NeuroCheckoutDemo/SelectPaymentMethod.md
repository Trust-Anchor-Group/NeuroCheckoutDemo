Title: Checkout Demo
Description: This page contains the second page of a demo of the Neuro-Checkout.
Author: Peter Waher
Date: 2024-04-15
Master: \Master.md
CSS: CheckoutDemo.cssx
JavaScript: CheckoutDemo.js
JavaScript: /Checkout.js
JavaScript: /Events.js
Parameter: Description
Parameter: Amount
Parameter: Currency
Parameter: Country
Parameter: Context
Parameter: Tab

===================================================

Neuro-Checkout Demo (page 2)
===============================

The following information has been collected and will form the basis of the payment.

{{
if empty(Description) then BadRequest("Missing description.");
if empty(Amount) then BadRequest("Missing amount.");
if empty(Currency) then BadRequest("Missing currency-.");
if empty(Country) then BadRequest("Missing country.");
if empty(Context) then BadRequest("Missing context.");
if empty(Tab) then BadRequest("Missing Tab.");

ProcessResult:=(Result,State)->
(
	LogInformation("Result returned.",
	{
		"Ok":Result.Ok,
		"Error":Result.Error,
		"Amount":Result.Amount,
		"Currency":Result.Currency,
		"Context":State
	});

	if (Result.Ok) then
		PushEvent("/NeuroCheckoutDemo/SelectPaymentMethod.md",{"Tab":Tab},"PaymentOk",{"Amount":Result.Amount,"Currency":Result.Currency,"Context":State})
	else
		PushEvent("/NeuroCheckoutDemo/SelectPaymentMethod.md",{"Tab":Tab},"PaymentFailed",{"Error":Result.Error,"Context":State});
);

Timestamp:=null
}}

| Information Collected        ||
|:------------|:----------------|
| Description | {{Description}} |
| Amount      | {{Amount}}      |
| Currency    | {{Currency}}    |
| Country     | {{Country}}     |
| Context     | {{Context}}     |

![Check-Out](/Checkout.md?Description={{UrlEncode(Description)}}&Amount={{Amount}}&Currency={{UrlEncode(Currency)}}&IsPaid=0&Country={{UrlEncode(Country)}}&ExcludeProvider=&Account=&Callback=ProcessResult&State={{UrlEncode(Context)}})
