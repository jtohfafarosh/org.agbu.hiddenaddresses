<!-- Script to hide Addresses of type "Old". -->

CRM.$(function($) {
    $('div.crm-contact-page').each(function() {
        $("<div class='crm-clear crm-summary-row'><div class='crm-content'><input type='checkbox' name='hiddenAddresses' id='show-hide-address'><span class='crm-content'>No Hidden Address(es).</span><div>").insertBefore($('div.crm-address-block div.add-new'));
        var checkbox = $('#show-hide-address');
        checkbox.hide();
        checkbox.next().hide();

        var hiddenAddresses = 0;
        $('div.crm-address-block div.crm-address_type_Old').each(function() {
            if ($(this).find('div.primary').length === 0) {
                $(this).hide();
                hiddenAddresses = hiddenAddresses + 1;
            }
        });
        if (hiddenAddresses > 0) {
            var checkbox = $('#show-hide-address');
            checkbox.show();
            checkbox.next().show();
            checkbox.next().text(" Show " + hiddenAddresses + " Hidden Address(es).")
        }
    });

    $('#show-hide-address').click(function() {
        if($(this).is(':checked')) {
            $('div.crm-address-block div.crm-address_type_Old').each(function() {
                if ($(this).find('div.primary').length === 0) {
                    $(this).show();
                }
            });
        }
        else {
            $('div.crm-address-block div.crm-address_type_Old').each(function() {
                if ($(this).find('div.primary').length === 0) {
                    $(this).hide();
                }
            });
        }
    });

    $('div.crm-address-block').on('submit', 'form.CRM_Contact_Form_Inline_Address', function() {
        var hiddenAddresses = 0;
        $('div.crm-address-block div.crm-address_type_Old').each(function() {
            if ($(this).find('div.primary').length === 0) {
                $(this).show();
                hiddenAddresses = hiddenAddresses + 1;
            }
        });
        if (hiddenAddresses > 0) {
            if ($('#show-hide-address').length === 0) {
                $("<div class='crm-clear crm-summary-row'><div class='crm-content'><input type='checkbox' name='hiddenAddresses' id='show-hide-address'><span class='crm-content'>No Hidden Address(es).</span><div>").insertBefore($('div.crm-address-block div.add-new'));
            }
            var checkbox = $('#show-hide-address');
            checkbox.show();
            checkbox.next().show();
            checkbox.next().text(" Show " + hiddenAddresses + " Hidden Address(es).")
            checkbox.prop( "checked", true );
        }
    });

    $('div.crm-address-block div.crm-inline-block-content').on('click', function() {
        var hiddenAddresses = 0;
        $('div.crm-address-block div.crm-address_type_Old').each(function() {
            if ($(this).find('div.primary').length === 0) {
                $(this).show();
                hiddenAddresses = hiddenAddresses + 1;
            }
        });
        if (hiddenAddresses > 0) {
            if ($('#show-hide-address').length === 0) {
                $("<div class='crm-clear crm-summary-row'><div class='crm-content'><input type='checkbox' name='hiddenAddresses' id='show-hide-address'><span class='crm-content'>No Hidden Address(es).</span><div>").insertBefore($('div.crm-address-block div.add-new'));
            }
            var checkbox = $('#show-hide-address');
            checkbox.show();
            checkbox.next().show();
            checkbox.next().text(" Show " + hiddenAddresses + " Hidden Address(es).")
            checkbox.prop( "checked", true );
        }
    });

    $('div.crm-address-block div.crm-address_type_Old, div.crm-address-block div.crm-container-snippet div.crm-address_type_Old').on('mouseover', function() {
        var hiddenAddresses = 0;
        $('div.crm-address-block div.crm-address_type_Old').each(function() {
            if ($(this).find('div.primary').length === 0) {
                $(this).show();
                hiddenAddresses = hiddenAddresses + 1;
            }
        });
        if (hiddenAddresses > 0) {
            if ($('#show-hide-address').length === 0) {
                $("<div class='crm-clear crm-summary-row'><div class='crm-content'><input type='checkbox' name='hiddenAddresses' id='show-hide-address'><span class='crm-content'>No Hidden Address(es).</span><div>").insertBefore($('div.crm-address-block div.add-new'));
            }
            var checkbox = $('#show-hide-address');
            checkbox.show();
            checkbox.next().show();
            checkbox.next().text(" Show " + hiddenAddresses + " Hidden Address(es).")
            checkbox.prop( "checked", true );
        }
    });
});