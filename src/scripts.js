function dg_ajax_form_handling(e) {
    e.preventDefault();

    // Define main DOM elements of the submission process.
    var submit_button = e.target;
    var form = document.getElementById('dg_form');
    var fetch_url = form.getAttribute('data-url');
    var results = document.getElementById('form_results');

    // If the button is disabled, do not run the script.
    if(submit_button.getAttribute('disabled') === 'disabled') {
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.timeout = 5000; // time in milliseconds, currently 5 seconds

    var fetch_data_object = new FormData(form);

    results.classList.remove('alert', 'alert-success', 'alert-danger', 'alert-warning');
    results.classList.add('alert', 'alert-primary');

    submit_button.setAttribute('disabled', 'disabled');

    xhttp.onreadystatechange = function() {
        results.style.display = 'block';
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.responseText;
            try {
                var jsonified = JSON.parse(response);

                if(parseInt(jsonified.status) === 200) {
                    // Status code from PHP script represents success.
                    results.classList.remove('alert', 'alert-warning', 'alert-danger', 'alert-primary');
                    results.classList.add('alert', 'alert-success');
                    form.reset();
                } else {
                    // Status code from PHP script is not success code.
                    results.classList.remove('alert', 'alert-success', 'alert-danger', 'alert-primary');
                    results.classList.add('alert', 'alert-warning');
                }

                results.innerHTML = jsonified.message;

                setTimeout(function() {
                    // Hide results after 2.5 seconds.
                    results.style.display = 'none';
                    submit_button.removeAttribute('disabled');
                }, 2500);
            } catch(e) {
                // There has been some error running the script, let's output the exception to the result container to learn more.
                results.classList.remove('alert', 'alert-success', 'alert-primary', 'alert-warning');
                results.classList.add('alert', 'alert-danger');
                submit_button.removeAttribute('disabled');
                results.innerHTML = e;
            }
        } else {
            // The request has not been completed yet.
            results.innerHTML = '👻 Loading results...';
        }
    };

    xhttp.ontimeout = function() {
        // Set a function to handle request timeouts.
        received_message.innerHTML = 'The request has timed out,';
        received_message.classList.add('error');
        button.removeAttribute('disabled');
        prompt_message.value = message_value;
        message_list.scrollTop = message_list.scrollHeight;
    };

    xhttp.open("POST", fetch_url, true);
    xhttp.send(fetch_data_object);
    
    return true;
}

document.getElementById('dg_submit_button').addEventListener('click', dg_ajax_form_handling)