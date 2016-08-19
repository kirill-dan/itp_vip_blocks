Module for create payment VIP Blocks via different payment processors

Developer: Danilevsky Kirill k.danilevsky@gmail.com
web: http://best-house.org

For work module need install itp_payment module.

This module automatically creates blocks with nodes which were paid. After first paid will be create new block for specific node type.
You need activate and settings created blocks.

For change default block name please change string in function: itp_vip_blocks_get_random_node, variable: $vip_nodes

For setting show of node make change in function: itp_vip_blocks_create_vip_node.
Change style_name in variable $image on your image style (see admin/config/media/image-styles).
Make change in variable $node_markup. Delete my fields and insert own node fields.

FOR EXAMPLE:

My data:

  $node_markup .= '<div class = "image">' . l($image, 'node/' . $nid, array('html' => TRUE)) . '</div>';
  $node_markup .= '<div class = "region-city">' . $node_view['field_region_city'][0]['#markup'] . '</div>';

  if (isset($node_view['field_rent_sale_residential'][0]['#markup'])) {
    $node_markup .= '<div class="rent-sale-block">
                     <div class = "rent-sale-text">' . t('Rent/Sale:') . '</div>
                     <div class = "rent-sale">' . $node_view['field_rent_sale_residential'][0]['#markup'] . '</div></div>';
  }
  elseif (isset($node_view['field_rent_sale_commercial'][0]['#markup'])) {
    $node_markup .= '<div class="rent-sale-block">
                     <div class = "rent-sale-text">' . t('Rent/Sale:') . '</div>
                     <div class = "rent-sale">' . $node_view['field_rent_sale_commercial'][0]['#markup'] . '</div></div>';
  }

  $node_markup .= '<div class="block-price">
                   <div class = "price-text">' . t('Price:') . '</div>
                   <div class = "price">' . $node_view['field_price'][0]['#markup'] . '</div></div>';

Your custom new data:

  $node_markup .= '<div class = "image">' . l($image, 'node/' . $nid, array('html' => TRUE)) . '</div>';
  // field_my_field - this is field from you node
  $node_markup .= '<div class = "my-field">' . $node_view['field_my_field'][0]['#markup'] . '</div>';

  $node_markup .= '<div class="block-price">
                   <div class = "price-text">' . t('Price:') . '</div>
                   <div class = "price">' . $node_view['field_price'][0]['#markup'] . '</div></div>';

For change style use file css/itp_vip_blocks.css
Enjoy.