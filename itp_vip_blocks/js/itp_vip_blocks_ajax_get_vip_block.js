/*
 *  Get dynamic content (VIP block)
 */

(function ($) {
    Drupal.behaviors.ItpVipGetBlock = {
        attach: function (context, settings) {
            // Execute code only once.
            if (typeof (block) == "undefined") {

                $(".itp-vip-block-ajax").each(function () {

                    var blockAjaxLoadInfo = [];

                    if ($(this).length) {
                        blockAjaxLoadInfo[blockAjaxLoadInfo.length] = $(this).data();

                        if (blockAjaxLoadInfo.length) {
                            var block_data = {"type": blockAjaxLoadInfo};

                            $.ajax({
                                type: 'POST',
                                context: this,
                                url: '/ajax-dynamic-get-vip-block',
                                data: block_data,
                                dataType: 'json',
                                success: function (block_content) {
                                    var BlockObj = block_content[1];
                                    var contentObj = jQuery.parseJSON(BlockObj.data);
                                    var content_html = contentObj.content;
                                    $(this).html(content_html);
                                },
                                error: function (result) {
                                    //alert('Error');
                                }
                            });
                        }
                    }

                });
            }
            // Execute code always when you call Ajax.
            block = true;


        }
    };
})(jQuery);
