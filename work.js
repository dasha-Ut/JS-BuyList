$(document).ready(function(){

    var $list = $(".column1_design");
    var ONE_ROW_HTML= $(".column1_line2").html();
    var $not_bought = $(".what_to_buy_");
    var $bought = $(".list_of_bought");
    var b_product= $(".bought_product").html();
    var $new_input = $(".text_Name");


    function addItem(title){
        var  bought = false;

        $(".text_Name").val( title );
        if ($(".text_Name").val().length>0) {
            var $node = $(ONE_ROW_HTML);
            var $b_node = $(b_product);
            var quantity = 1;

            var $button_buy = $node.find(".buy");
            var $button_bought = $node.find(".unbuy");


            $node.find(".product").text(title);
            $b_node.find(".name_of_bought_product").text(title);


            $quantity_label = $node.find(".number");
            $quantity_label.text(quantity);

            $b_count = $b_node.find(".number_of_bought_product");
            $b_count.text(quantity);


            $("#text_Name").value = null;


            $node.find(".encrease").click(function () {

                quantity += 1;

                $node.find(".number").text(quantity);
                $b_node.find(".number_of_bought_product").text(quantity);


            });


            $node.find(".decrease").click(function () {
                if (quantity > 1) {
                    quantity -= 1;
                    $node.find(".number").text(quantity);
                    $b_node.find(".bought_product_number").text(quantity);
                }

            });


            $node.find(".delete").click(function () {

                $node.hide();
                $b_node.hide();
            });


            $node.find(".buy").click(function () {
                if (!bought) {
                    $node.find(".decrease").hide();
                    $node.find(".encrease").hide();
                    $node.find(".buy").hide();
                    $node.find(".delete").hide();
                    $node.find(".unbuy").show();

                    $bought.append($b_node);
                    bought = true;
                } } );
            $node.find(".unbuy").click(function () {

                if (bought) {
                    $node.find(".decrease").show();
                    $node.find(".encrease").show();

                    $node.find(".delete").show();
                    $node.find(".unbuy").hide();
                    $node.find(".buy").show();
                    $not_bought.append($b_node);
                    bought = false;
                }
            });




            $node.find(".button-un-bought").click(function () {
                $node.removeClass("is-bought");
                $list_right.append($node_right);

            });




            $node.find(".product").click(function () {
                if (!bought) {
                    $node.find('.product').hide();
                    $node.find('.edit').show();
                    $node.find(".edit").focus();

                    $node.find(".edit").val(title);


                    $(document).focusout(function (e) {
                        $node.find('.product').show();
                        $node.find('.edit').hide();
                        $node.find(".product").text($node.find('.edit').val());
                        $b_node.find(".name_of_bought_product").text($node.find('.edit').val());

                    });
                }
            });


            $(".text_Name").val(null);
            $not_bought.append($b_node);
            $list.append($node);
        }}

    $(".button_add").click(function () {
        var new_name = $new_input.val();

        addItem(new_name);


    });

    addItem("Печиво");
    addItem("Сир");
    addItem("Помідори");
});
