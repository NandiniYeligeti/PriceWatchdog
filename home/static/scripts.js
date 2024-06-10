jQuery(document).ready(function($) {
    // jQuery code for handling form submission for the first search form
    $('#search-form1').submit(function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        var query1 = $('#search-input1').val(); // Get the value of the search input field

        // Perform any additional actions, such as AJAX request or form validation
        if (query1.length >= 3) {
            $.ajax({
                url: '/search/',
                data: {'query1': query1},
                success: function(response) {
                    $('#search-results1').empty();
                    console.log(query1)
                    $.each(response.products, function(index, product) {
                        $('#search-results1').append('<div>' + product + '</div>');
                    });
                }
            });
        }
    });

    // jQuery code for handling form submission for the second search form
    $('#search-form2').submit(function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        var query2 = $('#search-input2').val(); // Get the value of the search input field

        // Perform any additional actions, such as AJAX request or form validation
        if (query2.length >= 3) {
            $.ajax({
                url: '/search/',
                data: {'query2': query2},
                success: function(response) {
                    $('#search-results2').empty();
                    $.each(response.products, function(index, product) {
                        $('#search-results2').append('<div>' + product + '</div>');
                    });
                }
            });
        }
    });

    // AJAX code for autocomplete search functionality
    $(document).ready(function() {
        $('#search-input').keyup(function() {
            var query = $(this).val();
            if (query.length >= 3) {
                $.ajax({
                    url: '/search/',
                    data: {'query': query},
                    success: function(response) {
                        $('#search-results').empty();
                        $.each(response.products, function(index, product) {
                            $('#search-results').append('<div>' + product + '</div>');
                        });
                    }
                });
            }
        });
    });
});