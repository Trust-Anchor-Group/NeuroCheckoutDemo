NeuroCheckoutDemo
=====================

This project contains a simple demo-page that shows how the Neuro-Checkout feature in the 
TAG Neuron(R) works.

How the Neuro-Checkout works
-------------------------------

The Neuro-Checkout on the TAG Neuron(R) consists of two files that comes with your Neuron(R) installation. You include them in your web page:

* `/Checkout.md` is a file you include on your page where you want the checkout to appear. It interfaces available payment solutions on the
Neuron(R), and allow visitors to the page to pay for services using these payment providers.

* `/Checkout.js` is a JavaScript file that contains necessary functions that the service-side portion of the Checkout can call to update the
page.

For the Checkout to work you also need to enable the page to receive client push notifications from the Neuron(R). You do this by also including
the `/Events.js` JavaScript file, also available in the Neuron(R) installation.

Project Files
----------------

| File                                            | Description                                                                  |
|:------------------------------------------------|:-----------------------------------------------------------------------------|
| `Root\NeuroCheckoutDemo\CollectInformation.md`  | First page in the demo, that allows users to describe what they want to buy. |
| `Root\NeuroCheckoutDemo\CheckoutDemo.cssx`      | Customized styles for the checkout demo pages.                               |
| `Root\NeuroCheckoutDemo\CheckoutDemo.js`        | Javascript functions for custom GUI features in the demo.                    |
| `Root\NeuroCheckoutDemo\SelectPaymentMethod.md` | Second page in the demo, where the user selects the payment method.          |
| `Root\NeuroCheckoutDemo\PaymentFailed.md`       | Third page in the demo, if payment failed.                                   |
| `Root\NeuroCheckoutDemo\PaymentOk.md`           | Third page in the demo, if payment was successful.                           |

Gateway.config
-----------------

To simplify development, once the project is cloned, add a `FileFolder` reference
to your repository folder in your [gateway.config file](https://lab.tagroot.io/Documentation/IoTGateway/GatewayConfig.md). 
This allows you to test and run your changes to Markdown and Javascript immediately, 
without having to synchronize the folder contents with an external 
host, or recompile or go through the trouble of generating a distributable software 
package just for testing purposes.

Example of how to point a web folder to your project folder:

```
<FileFolders>
  <FileFolder webFolder="/NeuroCheckoutDemo" folderPath="C:\My Projects\NeuroCheckoutDemo\Root\NeuroCheckoutDemo"/>
</FileFolders>
```

**Note**: Once the file folder reference is added, you need to restart the IoT Gateway service for the change to take effect.

**Note 2**:  Once the gateway is restarted, the source for the files is in the new location. Any changes you make in the corresponding
`ProgramData` subfolder will have no effect on what you see via the browser.

**Note 3**: This file folder is only necessary on your developer machine, to give you real-time updates as you edit the files in your
developer folder. It is not necessary in a production environment, as the files are copied into the correct folders when the package 
is installed.

Runt the Demo
----------------

Once you have copied the project files into a suitable folder, and possibly configured the `gateway.config` file and restarted the Neuron(R),
open the `CollectInformation.md` file in a browser (using the appropriate URL) to test the demo of the Neuro-Checkout. The page takes the following
query parameters:

| Query Parameter                                                                                                                          ||
|:--------------|:--------------------------------------------------------------------------------------------------------------------------|
| `Description` | Prefilled description of item to buy. If not provided, field is filled with "Test item".                                  |
| `Amount`      | Prefilled amount of item to buy. If not provided, field is filled with 10.                                                |
| `Currency`    | Prefilled currency of the transaction. If not provided, field is filled with the default currency of the broker.          |
| `Country`     | Prefilled country of the transaction. If not provided, field is filled with the currency of legal identity of the broker. |
| `Context`     | Prefilled context value. The value is not used in the transaction, but passed along to callback methods for context.      |

So, if you run a development broker, listening on port 8081, you could invoke the checkout demo by navigating to:

	http://localhost:8081/NeuroCheckoutDemo/CollectInformation.md?Description=Test&Amount=5
