Title: Checkout Demo
Description: This page contains the first page of a demo of the Neuro-Checkout.
Author: Peter Waher
Date: 2024-04-15
Master: \Master.md
CSS: CheckoutDemo.cssx
JavaScript: CheckoutDemo.js
JavaScript: /Events.js
AllowScriptTag: 1
Parameter: Description
Parameter: Amount
Parameter: Currency
Parameter: Country
Parameter: Context

===================================================

Neuro-Checkout Demo (page 1)
===============================

Here you can test the Neuro-Checkout. The checkout uses the available payment services installed on the Neuron(R). How these services are
configured determines how the checkout will work.

Please fill out some item information below, describing what you want to pay for.

<form>
<fieldset>
<legend>Demo item to buy</legend>

<p>
<label for="Description">Description of item to pay for:</label>  
<input type="text" id="Description" name="Description" value="{{empty(Description) ? "Test item" : Description}}" autofocus required title="A free-text description of the item to pay for."/>
</p>

<p>
<label for="Amount">Amount:</label>  
<input type="number" min="1" id="Amount" name="Amount" value="{{empty(Amount) ? "10" : Amount}}" required title="Amount of the item to pay for."/>
</p>

<p>
<label for="Currency">Currency:</label>  
<input type="text" id="Currency" name="Currency" pattern="[A-Z]{3}" value="{{empty(Currency) ? GetSetting('DefaultCurrency','EUR') : Currency}}" required title="Currency to use in transaction."/>
</p>

<p>
<label for="Country">Country:</label>  
<input type="text" id="Country" name="Country" pattern="[A-Z]{2}" value="{{empty(Country) ? Waher.IoTGateway.Setup.LegalIdentityConfiguration.Instance.Country : Country}}" required title="Country of transaction."/>
</p>

<p>
<label for="Context">Context:</label>  
<input type="text" id="Context" name="Context" value="{{empty(Context) ? "Demo" : Context}}" title="Some state information that will be passed along during the process."/>
</p>

<button id="NextButton" type="Button" class="posButton" onclick="GoToCheckOut()">Next</button>
</fieldset>
</form>
