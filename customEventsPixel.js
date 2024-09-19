var e = {{Event}}; // Passing the event from GTM

function switchEvents(e) {
    var obj = {
        "view_item": "ViewContent",
        "view_item_list": "ViewItemList",
        "select_item": "SelectItem",
        "view_promotion": "ViewPromotion",
        "select_promotion": "SelectPromotion",
        "add_to_cart": "AddToCart",
        "remove_from_cart": "RemoveFromCart",
        "add_to_wishlist": "AddToWishlist",
        "view_cart": "ViewCart",
        "begin_checkout": "InitiateCheckout",
        "add_payment_info": "AddPaymentInfo",
        "add_shipping_info": "AddShippingInfo",
        "purchase": "Purchase"
    };

    // Checking if the event exists in the object and is not undefined
    customEventsFacebook = (e in obj) ? obj[e] : null;

    return customEventsFacebook;  // customEventsFacebook needs to be passed to the GTM tag
}

switchEvents(e);
