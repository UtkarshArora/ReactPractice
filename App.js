import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
   return(<div className="heading">
        <img className="imgLogo" src="https://www.shutterstock.com/image-vector/burger-logo-vector-icon-symbol-600nw-2496553061.jpg"/>
        <ul>
            <li>Links</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
   )
}

const resObj = [
    {
        "id": "row.store:ad_34049437:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Arom Dee Thai - 6735 3rd Ave",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "0.7 mi • 24 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/34049437/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzNdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(10+)\"},\"savelists\":[],\"store_id\":\"34049437\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:25516818461\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bd558f4c-fe86-4de6-afd4-70457cbbcae7-2d9a0a5a-7388-4be8-b412-7e8ba19e248b-retina-large.jpg\"}},\"name\":\"Pad Kee Mao\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818460\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc6eca11-2057-4ce9-964a-1efdf7c1ffd3-e44414e2-bf3d-4829-9b65-5aef7e49ed6d-retina-large.jpg\"}},\"name\":\"Pad Se Ew\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818459\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\"}},\"name\":\"Pad Thai\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818427\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/72dd822d-7d33-4624-9b9a-9a9d9d17c7be-1ead9eb8-bb3f-4118-8976-c26e96789b05-retina-large.jpg\"}},\"name\":\"Curry Puff\",\"price\":\"$13.00\"},{\"card_id\":\"card.preview_item:25516818471\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd381eae-2db3-4528-a429-bf7fc4b87b75-fef95c09-b892-46c2-a49b-9b3b992b6010-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25517555492\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f68277b-040d-4abd-b1da-4176e7183c5a-retina-large.jpg\"}},\"name\":\"Mango Sticky Rice\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:25517555473\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/edb23ac5-ed72-4070-af7b-c59fcdbeffbd-aa11682d-159f-45f4-8e5b-23fdf282c286-retina-large.jpg\"}},\"name\":\"Pineapple Fried Rice\",\"price\":\"$18.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"44113879-8f28-4a0d-999a-2bef03f99630\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"87f7f605-5342-4b9d-a2ac-7973a111605a\",\"ad_id\":\"fa7df1da-eace-4bbb-a0b9-0771badb2fbd\",\"asap_available\":true,\"asap_time\":24,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Sponsored,type:sponsored;\",\"business_id\":\"14250545\",\"business_vertical_id\":\"0\",\"campaign_id\":\"0b7a5fbb-4feb-43fa-bff7-f433138e662d\",\"card_position\":0,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7b3c4596-9845-4390-91a3-a6039cdc0e62.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:30:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"16\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"24 min\",\"store_distance_in_miles\":0.6862495366675654,\"store_featured_item_cnt\":7,\"store_id\":\"34049437\",\"store_latitude\":40.636892,\"store_longitude\":-74.02529,\"store_name\":\"Arom Dee Thai - 6735 3rd Ave\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_1166654:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Come On Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.1 mi • 22 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1166654/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTc3XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"1166654\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:196146439\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7db18966-8c21-415a-aa1a-131eaebb5106-retina-large-jpeg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Drunken Noodle\",\"price\":\"$13.50\",\"rating\":\"100% (14)\"},{\"card_id\":\"card.preview_item:196146438\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f7f624f-bddb-4cb2-b28f-0c29af74b007-retina-large.JPG\"}},\"name\":\"Pad See Ew\",\"price\":\"$13.50\",\"rating\":\"89% (9)\"},{\"card_id\":\"card.preview_item:196146437\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$13.50\",\"rating\":\"93% (30)\"},{\"card_id\":\"card.preview_item:196146405\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a1a8cea1-decf-40fe-9fae-5ba0762f3966-retina-large-jpeg\"}},\"name\":\"Spring Rolls (4 Pieces)\",\"price\":\"$9.00\",\"rating\":\"100% (7)\"},{\"card_id\":\"card.preview_item:196146409\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/002d1e3f-409e-4ea5-a5aa-12a7f18b35cc-retina-large-jpeg\"}},\"name\":\"Curry Puff (3 Pieces)\",\"price\":\"$12.00\",\"rating\":\"100% (10)\"},{\"card_id\":\"card.preview_item:196146411\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d4a39712-d13e-496c-a935-810bfdfa08ee-retina-large-jpeg\"}},\"name\":\"Crab Rangoon \",\"price\":\"$10.00\"},{\"card_id\":\"card.preview_item:196146443\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/44af9eff-89e0-44d4-a229-467cb17ec9f8-retina-large-jpeg\"}},\"name\":\"Green curry\",\"price\":\"$13.50\",\"rating\":\"100% (8)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"77376688-e744-4781-8504-bc2af6cd599d\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"b4e16330-266e-48d6-b52e-522bd8b20cf0\",\"ad_id\":\"9ae65a09-1927-4310-a21f-12d573e2d230\",\"asap_available\":true,\"asap_time\":22,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Sponsored,type:sponsored;\",\"business_id\":\"537380\",\"business_vertical_id\":\"0\",\"campaign_id\":\"6cae767b-f38f-4ee4-b065-af0725fe8444\",\"card_position\":1,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/38b449cb-82a3-4a03-a7d7-c22f0291debd.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"271\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.5\",\"store_display_asap_time\":\"22 min\",\"store_distance_in_miles\":1.1482022799513305,\"store_featured_item_cnt\":7,\"store_id\":\"1166654\",\"store_latitude\":40.629097,\"store_longitude\":-74.02859,\"store_name\":\"Come On Thai\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:34049437:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Arom Dee Thai - 6735 3rd Ave",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Fast Casual",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "0.7 mi • 24 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/34049437/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNTUxNjgxODQ1OSwyNTUxNzU1NTQ3NSwyNTUxNzU1NTQ3Nl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(10+)\"},\"savelists\":[],\"store_id\":\"34049437\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:25516818461\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bd558f4c-fe86-4de6-afd4-70457cbbcae7-2d9a0a5a-7388-4be8-b412-7e8ba19e248b-retina-large.jpg\"}},\"name\":\"Pad Kee Mao\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818460\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc6eca11-2057-4ce9-964a-1efdf7c1ffd3-e44414e2-bf3d-4829-9b65-5aef7e49ed6d-retina-large.jpg\"}},\"name\":\"Pad Se Ew\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818459\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\"}},\"name\":\"Pad Thai\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25516818427\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/72dd822d-7d33-4624-9b9a-9a9d9d17c7be-1ead9eb8-bb3f-4118-8976-c26e96789b05-retina-large.jpg\"}},\"name\":\"Curry Puff\",\"price\":\"$13.00\"},{\"card_id\":\"card.preview_item:25516818471\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd381eae-2db3-4528-a429-bf7fc4b87b75-fef95c09-b892-46c2-a49b-9b3b992b6010-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:25517555492\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f68277b-040d-4abd-b1da-4176e7183c5a-retina-large.jpg\"}},\"name\":\"Mango Sticky Rice\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:25517555473\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/edb23ac5-ed72-4070-af7b-c59fcdbeffbd-aa11682d-159f-45f4-8e5b-23fdf282c286-retina-large.jpg\"}},\"name\":\"Pineapple Fried Rice\",\"price\":\"$18.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"802b037f-ffe4-4ae0-84c1-d7a35e2ff76e\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":24,\"badges\":\"\",\"business_id\":\"14250545\",\"business_vertical_id\":\"0\",\"card_position\":2,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7b3c4596-9845-4390-91a3-a6039cdc0e62.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:30:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"16\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"24 min\",\"store_distance_in_miles\":0.6862495366675654,\"store_featured_item_cnt\":7,\"store_id\":\"34049437\",\"store_latitude\":40.636892,\"store_longitude\":-74.02529,\"store_name\":\"Arom Dee Thai - 6735 3rd Ave\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "divider.standard:931f9dc2-c828-4f2e-abd9-b154b5e59e59",
        "childrenCount": 0,
        "component": {
            "id": "divider.standard",
            "category": "divider",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": null,
        "images": null,
        "events": null,
        "style": null,
        "layout": null,
        "custom": null,
        "logging": null,
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:134529334",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$19.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Nourish",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "39 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7ecd1fb0-41b4-4f1d-b704-efd9a6a6aeb0-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/134529334/store/132982?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjEzNDUyOTMzNCwib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6MTMyOTgyLCJzdG9yZV9uYW1lIjoiTm91cmlzaCIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDEwayspIiwiYXZlcmFnZV9yYXRpbmciOjQuODAwMDAwMTkwNzM0ODYzLCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS9jNTI2MGQ3ZC02OTI3LTQ2MDEtOTU1ZC1iM2JhYzAwMGY4MzMuanBnIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50IjoxMjE5NiwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzkgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjEzMjk4MiwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"134529334\",\"item_rating_text\":\"94% (888)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(10k+)\"},\"store_id\":\"132982\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":0,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"0\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"134529334\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7ecd1fb0-41b4-4f1d-b704-efd9a6a6aeb0-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1900,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"132982\",\"store_name\":\"Nourish\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:372049683",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai (GF)",
            "titleTextAttributes": null,
            "subtitle": "$14.50",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "One More Charm",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "35 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/372049683/store/1143613?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjM3MjA0OTY4Mywib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6MTE0MzYxMywic3RvcmVfbmFtZSI6Ik9uZSBNb3JlIENoYXJtIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoMmsrKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjgwMDAwMDE5MDczNDg2Mywic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvNjBmZGRkNmUtY2JiYy00MWIxLTkyZGEtNGExMzFiMmY0YTA1LjE4NCIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6MjQxNiwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzUgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjExNDM2MTMsIm1lbnVJZCI6bnVsbCwiY2F0ZWdvcnlJZCI6bnVsbCwiYnVzaW5lc3NJZCI6bnVsbCwidmVydGljYWxJZCI6bnVsbH0=&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"372049683\",\"item_rating_text\":\"89% (112)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(2k+)\"},\"store_id\":\"1143613\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":1,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"1\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"372049683\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai (GF)\",\"item_price\":1450,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1143613\",\"store_name\":\"One More Charm\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:3605456425",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$12.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Beds Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "70 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d661c608-a766-4eab-a2bb-c889a6300a3b-retina-large.JPG",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/3605456425/store/24580173?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjM2MDU0NTY0MjUsIm9wdGlvbklkIjpudWxsLCJzZWxlY3RlZE9yZGVySXRlbUlkIjpudWxsLCJzdG9yZUxpdGVEYXRhIjp7InN0b3JlSWQiOjI0NTgwMTczLCJzdG9yZV9uYW1lIjoiQmVkcyBUaGFpIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoMWsrKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjY5OTk5OTgwOTI2NTEzNywic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvZTZkOTdkMDMtNTJjNS00ZDk2LWFlZGEtYWQ0Njc2MmIzMTljLnBuZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6MTc3NywiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiNzAgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjI0NTgwMTczLCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"3605456425\",\"item_rating_text\":\"90% (197)\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"store_id\":\"24580173\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":2,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"2\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"3605456425\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d661c608-a766-4eab-a2bb-c889a6300a3b-retina-large.JPG\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1295,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"24580173\",\"store_name\":\"Beds Thai\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:1517832341",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai Classic",
            "titleTextAttributes": null,
            "subtitle": "$14.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Ricepot Thai Cookhouse",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "29 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/1517832341/store/2477824?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjE1MTc4MzIzNDEsIm9wdGlvbklkIjpudWxsLCJzZWxlY3RlZE9yZGVySXRlbUlkIjpudWxsLCJzdG9yZUxpdGVEYXRhIjp7InN0b3JlSWQiOjI0Nzc4MjQsInN0b3JlX25hbWUiOiJSaWNlcG90IFRoYWkgQ29va2hvdXNlIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoMWsrKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjU5OTk5OTkwNDYzMjU2OCwic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvZmM0ZmU0NGEtNmNhZC00ZTgyLTk2ZWEtNDk4MzFjMDdiZjQ4LnBuZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6MTA4NCwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMjkgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjI0Nzc4MjQsIm1lbnVJZCI6bnVsbCwiY2F0ZWdvcnlJZCI6bnVsbCwiYnVzaW5lc3NJZCI6bnVsbCwidmVydGljYWxJZCI6bnVsbH0=&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"1517832341\",\"item_rating_text\":\"79% (98)\",\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"store_id\":\"2477824\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":3,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"3\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"1517832341\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai Classic\",\"item_price\":1495,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"2477824\",\"store_name\":\"Ricepot Thai Cookhouse\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:27720961",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$16.50",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Corthaiyou",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "31 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f46f0e6-b7ca-4935-a1b5-65b1c0e7572b-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/27720961/store/133003?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjI3NzIwOTYxLCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoxMzMwMDMsInN0b3JlX25hbWUiOiJDb3J0aGFpeW91IiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoNGsrKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjU5OTk5OTkwNDYzMjU2OCwic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvNzAyNmFiYjItNzI3NC00MmJjLTk2ZTUtYzg3OWRhMGFiNWVkLmpwZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6NDA3NSwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzEgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjEzMzAwMywibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"27720961\",\"item_rating_text\":\"91% (172)\",\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(4k+)\"},\"store_id\":\"133003\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":4,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"4\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"27720961\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f46f0e6-b7ca-4935-a1b5-65b1c0e7572b-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1650,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"133003\",\"store_name\":\"Corthaiyou\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:17389696277",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai (GF)",
            "titleTextAttributes": null,
            "subtitle": "$18.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "bangkok degree",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "36 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/17389696277/store/2554242?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjE3Mzg5Njk2Mjc3LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoyNTU0MjQyLCJzdG9yZV9uYW1lIjoiYmFuZ2tvayBkZWdyZWUiLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6Iig1MDArKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjgwMDAwMDE5MDczNDg2Mywic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvOWM5ZjUzOWEtZTc2YS00YmM0LTk0ZTAtMmVjZTljZjQwMjE5LnBuZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6OTEyLCJldGFfZGlzcGxheV9zdHJpbmciOiIzNiBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6MjU1NDI0MiwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"17389696277\",\"item_rating_text\":\"96% (27)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(500+)\"},\"store_id\":\"2554242\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":5,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"5\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"17389696277\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai (GF)\",\"item_price\":1800,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"2554242\",\"store_name\":\"bangkok degree\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:12993221954",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$14.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Bangkok Boulevard",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "31 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/12993221954/store/23077508?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjEyOTkzMjIxOTU0LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoyMzA3NzUwOCwic3RvcmVfbmFtZSI6IkJhbmdrb2sgQm91bGV2YXJkIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoNTAwKykiLCJhdmVyYWdlX3JhdGluZyI6NC42OTk5OTk4MDkyNjUxMzcsInN0b3JlX2xvZ29fdXJsIjoiaHR0cHM6Ly9pbWcuY2RuNGRkLmNvbS9jZG4tY2dpL2ltYWdlL2ZpdD1jb250YWluLHdpZHRoPTEyMDAsaGVpZ2h0PTY3Mixmb3JtYXQ9YXV0by9odHRwczovL2Rvb3JkYXNoLXN0YXRpYy5zMy5hbWF6b25hd3MuY29tL21lZGlhL3Jlc3RhdXJhbnQvY292ZXJfc3F1YXJlLzdjNjExNDQ5LWY5MzgtNDQ2MC1hOWU1LTJiODYxMWIwY2M4MC5wbmciLCJpc19kYXNocGFzc19wYXJ0bmVyIjp0cnVlLCJkaXNwbGF5X2RlbGl2ZXJ5X2ZlZSI6IiQwIGRlbGl2ZXJ5IGZlZSwgZmlyc3Qgb3JkZXIiLCJudW1iZXJfb2ZfcmF0aW5nc19pbnQiOjk3NywiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzEgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjIzMDc3NTA4LCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"12993221954\",\"item_rating_text\":\"90% (105)\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(500+)\"},\"store_id\":\"23077508\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":6,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"6\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"12993221954\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1495,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"23077508\",\"store_name\":\"Bangkok Boulevard\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:25516818459",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$18.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Arom Dee Thai - 6735 3rd Ave",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "24 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/25516818459/store/34049437?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjI1NTE2ODE4NDU5LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjozNDA0OTQzNywic3RvcmVfbmFtZSI6IkFyb20gRGVlIFRoYWkgLSA2NzM1IDNyZCBBdmUiLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6IigxMCspIiwiYXZlcmFnZV9yYXRpbmciOjQuNjk5OTk5ODA5MjY1MTM3LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS80MjM0OGY0OS1kYzZmLTRkZTMtYmIxYy05MjNhZjNmYTc2NzUucG5nIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50IjoxNiwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMjQgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjM0MDQ5NDM3LCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"25516818459\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(10+)\"},\"store_id\":\"34049437\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":7,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"7\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"25516818459\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1b7fa1f-e651-41f1-9892-eacb48287dec-c3b904f0-7477-4de6-b303-0fbb26bc3cd8-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1800,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"34049437\",\"store_name\":\"Arom Dee Thai - 6735 3rd Ave\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:715961602",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$16.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Huge Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "34 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/196ac07c-9463-4823-bb3a-303800ecec8c-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/715961602/store/1900237?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjcxNTk2MTYwMiwib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6MTkwMDIzNywic3RvcmVfbmFtZSI6Ikh1Z2UgVGhhaSIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDFrKykiLCJhdmVyYWdlX3JhdGluZyI6NC44MDAwMDAxOTA3MzQ4NjMsInN0b3JlX2xvZ29fdXJsIjoiaHR0cHM6Ly9pbWcuY2RuNGRkLmNvbS9jZG4tY2dpL2ltYWdlL2ZpdD1jb250YWluLHdpZHRoPTEyMDAsaGVpZ2h0PTY3Mixmb3JtYXQ9YXV0by9odHRwczovL2Rvb3JkYXNoLXN0YXRpYy5zMy5hbWF6b25hd3MuY29tL21lZGlhL3Jlc3RhdXJhbnQvY292ZXJfc3F1YXJlL2M4NDlkY2QyLWUyNTYtNDQ2OC1hMjZhLTI2MzhmZjA2MjcxZC5wbmciLCJpc19kYXNocGFzc19wYXJ0bmVyIjp0cnVlLCJkaXNwbGF5X2RlbGl2ZXJ5X2ZlZSI6IiQwIGRlbGl2ZXJ5IGZlZSwgZmlyc3Qgb3JkZXIiLCJudW1iZXJfb2ZfcmF0aW5nc19pbnQiOjE2OTEsImV0YV9kaXNwbGF5X3N0cmluZyI6IjM0IG1pbiIsImhpZ2hsaWdodF9zdHJpbmciOiIiLCJiYWRnZXMiOltdLCJpc19zaGlwcGluZ19vbmx5IjpudWxsfSwiaXNfaG9tZWdyb3duX2xveWFsdHkiOm51bGwsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJzdG9yZUlkIjoxOTAwMjM3LCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"715961602\",\"item_rating_text\":\"93% (150)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(1k+)\"},\"store_id\":\"1900237\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":8,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"8\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"715961602\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/196ac07c-9463-4823-bb3a-303800ecec8c-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1600,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1900237\",\"store_name\":\"Huge Thai\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:196146437",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$13.50",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Come On Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "22 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/196146437/store/1166654?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjE5NjE0NjQzNywib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6MTE2NjY1NCwic3RvcmVfbmFtZSI6IkNvbWUgT24gVGhhaSIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDIwMCspIiwiYXZlcmFnZV9yYXRpbmciOjQuNSwic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvODFiYTQ3NDgtM2ViOC00MzhkLWJiOTgtMzE3MTFjMjk3OGJiLnBuZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6MjcxLCJldGFfZGlzcGxheV9zdHJpbmciOiIyMiBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6MTE2NjY1NCwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"196146437\",\"item_rating_text\":\"93% (30)\",\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(200+)\"},\"store_id\":\"1166654\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":9,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"9\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"196146437\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1350,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1166654\",\"store_name\":\"Come On Thai\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:10995254629",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai (GF)(N)",
            "titleTextAttributes": null,
            "subtitle": "$16.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "KHao San",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "43 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/10995254629/store/24236644?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjEwOTk1MjU0NjI5LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoyNDIzNjY0NCwic3RvcmVfbmFtZSI6IktIYW8gU2FuIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoNTAwKykiLCJhdmVyYWdlX3JhdGluZyI6NC44MDAwMDAxOTA3MzQ4NjMsInN0b3JlX2xvZ29fdXJsIjoiaHR0cHM6Ly9pbWcuY2RuNGRkLmNvbS9jZG4tY2dpL2ltYWdlL2ZpdD1jb250YWluLHdpZHRoPTEyMDAsaGVpZ2h0PTY3Mixmb3JtYXQ9YXV0by9odHRwczovL2Rvb3JkYXNoLXN0YXRpYy5zMy5hbWF6b25hd3MuY29tL21lZGlhL3Jlc3RhdXJhbnQvY292ZXJfc3F1YXJlL2I4OTQ5YTNiLTY4ODktNDYxMC1iNWMwLWQ0NjcwZDU0YTg3Mi5qcGciLCJpc19kYXNocGFzc19wYXJ0bmVyIjp0cnVlLCJkaXNwbGF5X2RlbGl2ZXJ5X2ZlZSI6IiQwIGRlbGl2ZXJ5IGZlZSwgZmlyc3Qgb3JkZXIiLCJudW1iZXJfb2ZfcmF0aW5nc19pbnQiOjgyOCwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiNDMgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjI0MjM2NjQ0LCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"10995254629\",\"item_rating_text\":\"92% (40)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(500+)\"},\"store_id\":\"24236644\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":10,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"10\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"10995254629\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\",\"item_is_retail\":false,\"item_name\":\"Pad Thai (GF)(N)\",\"item_price\":1600,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"24236644\",\"store_name\":\"KHao San\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:46281355",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Glass Noodle Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$14.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Thaism",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "34 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7c064919-b6fe-4d58-aecd-8b29b9eb3152-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/46281355/store/213568?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjQ2MjgxMzU1LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoyMTM1NjgsInN0b3JlX25hbWUiOiJUaGFpc20iLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6Iig1ayspIiwiYXZlcmFnZV9yYXRpbmciOjQuNjk5OTk5ODA5MjY1MTM3LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS84NjA5NjI4Ni1jMjkyLTQyOTUtOTZiYy1lYTQ2YWMwYTljMTkucG5nIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6ZmFsc2UsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6NTU3MSwiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzQgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjIxMzU2OCwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"46281355\",\"item_rating_text\":\"85% (68)\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(5k+)\"},\"store_id\":\"213568\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":11,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"11\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"46281355\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7c064919-b6fe-4d58-aecd-8b29b9eb3152-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Glass Noodle Pad Thai\",\"item_price\":1495,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"213568\",\"store_name\":\"Thaism\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:308830921",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Jintana's Original Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$16.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Jintana Thai farmhouse",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "30 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/308830921/store/1286818?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjMwODgzMDkyMSwib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6MTI4NjgxOCwic3RvcmVfbmFtZSI6IkppbnRhbmEgVGhhaSBmYXJtaG91c2UiLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6IigxayspIiwiYXZlcmFnZV9yYXRpbmciOjQuNjk5OTk5ODA5MjY1MTM3LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS9mMmI2OWIzZC1hYTRjLTRjZWItYTM3MS0xODA1N2FkYjAxYzUucG5nIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50IjoxMjUwLCJldGFfZGlzcGxheV9zdHJpbmciOiIzMCBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6MTI4NjgxOCwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"308830921\",\"item_rating_text\":\"84% (128)\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"store_id\":\"1286818\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":12,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"12\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"308830921\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Jintana's Original Pad Thai\",\"item_price\":1600,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1286818\",\"store_name\":\"Jintana Thai farmhouse\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "button.quantity_stepper:6884bd8a-8810-430c-b98c-c363759cf660",
        "childrenCount": 0,
        "component": {
            "id": "button.quantity_stepper",
            "category": "button",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": null,
        "images": null,
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1528637/\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"badges\":[],\"bundle_type\":\"\",\"default_quantity\":1,\"display_unit\":\"\",\"estimate_pricing_description\":\"\",\"has_conditional_loyalty_pricing\":false,\"has_required_options\":false,\"is_dashpass_locked\":false,\"item_id\":\"8530747347\",\"item_msid\":\"\",\"matching_item_ids\":[],\"menu_bundle_parent_store_id\":\"\",\"menu_id\":\"\",\"name\":\"SHRIMP PAD THAI\",\"navigate_on_action\":false,\"page\":\"explore_page\",\"price\":{\"currency\":\"USD\",\"decimal_places\":2,\"display_string\":\"$18.00\",\"sign\":true,\"symbol\":\"$\",\"unit_amount\":1800},\"purchase_type\":\"\",\"retail_item_has_modifiers\":false,\"should_handle_navigation_in_parent\":false,\"should_show_display_unit\":false,\"sold_as_info_long_text\":\"\",\"sold_as_info_short_text\":\"\",\"store_id\":\"1528637\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":13,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"13\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"8530747347\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"SHRIMP PAD THAI\",\"item_price\":1800,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1528637\",\"store_name\":\"The Nuaa Table\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:8530747347",
        "childrenCount": 1,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "SHRIMP PAD THAI",
            "titleTextAttributes": null,
            "subtitle": "$18.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "The Nuaa Table",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "39 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/8530747347/store/1528637?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjg1MzA3NDczNDcsIm9wdGlvbklkIjpudWxsLCJzZWxlY3RlZE9yZGVySXRlbUlkIjpudWxsLCJzdG9yZUxpdGVEYXRhIjp7InN0b3JlSWQiOjE1Mjg2MzcsInN0b3JlX25hbWUiOiJUaGUgTnVhYSBUYWJsZSIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDJrKykiLCJhdmVyYWdlX3JhdGluZyI6NC44MDAwMDAxOTA3MzQ4NjMsInN0b3JlX2xvZ29fdXJsIjoiaHR0cHM6Ly9pbWcuY2RuNGRkLmNvbS9jZG4tY2dpL2ltYWdlL2ZpdD1jb250YWluLHdpZHRoPTEyMDAsaGVpZ2h0PTY3Mixmb3JtYXQ9YXV0by9odHRwczovL2Rvb3JkYXNoLXN0YXRpYy5zMy5hbWF6b25hd3MuY29tL21lZGlhL3Jlc3RhdXJhbnQvY292ZXJfc3F1YXJlL2E4ZjMzNmUyLTBjODUtNDViNC05MzQ5LWNhOTQ1Nzk2NDIyYi5wbmciLCJpc19kYXNocGFzc19wYXJ0bmVyIjp0cnVlLCJkaXNwbGF5X2RlbGl2ZXJ5X2ZlZSI6IiQwIGRlbGl2ZXJ5IGZlZSwgZmlyc3Qgb3JkZXIiLCJudW1iZXJfb2ZfcmF0aW5nc19pbnQiOjIwMzcsImV0YV9kaXNwbGF5X3N0cmluZyI6IjM5IG1pbiIsImhpZ2hsaWdodF9zdHJpbmciOiIiLCJiYWRnZXMiOltdLCJpc19zaGlwcGluZ19vbmx5IjpudWxsfSwiaXNfaG9tZWdyb3duX2xveWFsdHkiOm51bGwsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJzdG9yZUlkIjoxNTI4NjM3LCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"8530747347\",\"item_rating_text\":\"81% (151)\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(2k+)\"},\"store_id\":\"1528637\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":13,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"13\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"8530747347\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"SHRIMP PAD THAI\",\"item_price\":1800,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"1528637\",\"store_name\":\"The Nuaa Table\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:158163369",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai Noodles",
            "titleTextAttributes": null,
            "subtitle": "$15.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Lemongrass Grill",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "38 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/p/fit=contain,width=1200,height=672,format=auto/media/yelp/932ee67f-59ff-45d4-87d2-99bc534af961.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/158163369/store/8484?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjE1ODE2MzM2OSwib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6ODQ4NCwic3RvcmVfbmFtZSI6IkxlbW9uZ3Jhc3MgR3JpbGwiLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6IigxayspIiwiYXZlcmFnZV9yYXRpbmciOjQuNTk5OTk5OTA0NjMyNTY4LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS85YTg5ZmQzMy04M2NjLTRmZTEtYTQ4Zi00OGZhZGQ5MDE1YzMuanBnIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50IjoxMDc3LCJldGFfZGlzcGxheV9zdHJpbmciOiIzOCBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6ODQ4NCwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"158163369\",\"item_rating_text\":\"94% (77)\",\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"store_id\":\"8484\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":14,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"14\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"158163369\",\"item_image_url\":\"https://img.cdn4dd.com/p/fit=contain,width=1200,height=672,format=auto/media/yelp/932ee67f-59ff-45d4-87d2-99bc534af961.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai Noodles\",\"item_price\":1595,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"8484\",\"store_name\":\"Lemongrass Grill\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:23759561771",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$16.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "TongDee Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "36 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f78a8695-0a78-47ff-9ecc-989c5943a103-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/23759561771/store/32631951?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjIzNzU5NTYxNzcxLCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjozMjYzMTk1MSwic3RvcmVfbmFtZSI6IlRvbmdEZWUgVGhhaSIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDUwKykiLCJhdmVyYWdlX3JhdGluZyI6NC44MDAwMDAxOTA3MzQ4NjMsInN0b3JlX2xvZ29fdXJsIjoiaHR0cHM6Ly9pbWcuY2RuNGRkLmNvbS9jZG4tY2dpL2ltYWdlL2ZpdD1jb250YWluLHdpZHRoPTEyMDAsaGVpZ2h0PTY3Mixmb3JtYXQ9YXV0by9odHRwczovL2Rvb3JkYXNoLXN0YXRpYy5zMy5hbWF6b25hd3MuY29tL21lZGlhL3Jlc3RhdXJhbnQvY292ZXJfc3F1YXJlL2UyZmFhMWY3LWNhZjQtNDg4Mi1hNTliLTIxODM0ZDdmYjkzYi5qcGVnIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50Ijo5MywiZXRhX2Rpc3BsYXlfc3RyaW5nIjoiMzYgbWluIiwiaGlnaGxpZ2h0X3N0cmluZyI6IiIsImJhZGdlcyI6W10sImlzX3NoaXBwaW5nX29ubHkiOm51bGx9LCJpc19ob21lZ3Jvd25fbG95YWx0eSI6bnVsbCwicGFnZV9zdGFja190cmFjZSI6W10sInN0b3JlSWQiOjMyNjMxOTUxLCJtZW51SWQiOm51bGwsImNhdGVnb3J5SWQiOm51bGwsImJ1c2luZXNzSWQiOm51bGwsInZlcnRpY2FsSWQiOm51bGx9&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"23759561771\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(50+)\"},\"store_id\":\"32631951\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":15,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"15\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"23759561771\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f78a8695-0a78-47ff-9ecc-989c5943a103-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1695,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"32631951\",\"store_name\":\"TongDee Thai\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:2264472591",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$14.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Flatbush Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "36 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bfdb510b-9000-418c-8bfb-17c35f8f7fbe-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/2264472591/store/22919617?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjIyNjQ0NzI1OTEsIm9wdGlvbklkIjpudWxsLCJzZWxlY3RlZE9yZGVySXRlbUlkIjpudWxsLCJzdG9yZUxpdGVEYXRhIjp7InN0b3JlSWQiOjIyOTE5NjE3LCJzdG9yZV9uYW1lIjoiRmxhdGJ1c2ggVGhhaSIsIm51bWJlcl9vZl9yYXRpbmdzX2Rpc3BsYXlfc3RyaW5nIjoiKDIwMCspIiwiYXZlcmFnZV9yYXRpbmciOjQuNjk5OTk5ODA5MjY1MTM3LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS8wNzc3NWQxNy03OTVmLTQzZTktYWIzMy04MGU1NWY1OTMzNjMucG5nIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6ZmFsc2UsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6Mjc3LCJldGFfZGlzcGxheV9zdHJpbmciOiIzNiBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6MjI5MTk2MTcsIm1lbnVJZCI6bnVsbCwiY2F0ZWdvcnlJZCI6bnVsbCwiYnVzaW5lc3NJZCI6bnVsbCwidmVydGljYWxJZCI6bnVsbH0=&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"2264472591\",\"item_rating_text\":\"84% (32)\",\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(200+)\"},\"store_id\":\"22919617\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":16,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"16\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"2264472591\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bfdb510b-9000-418c-8bfb-17c35f8f7fbe-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1400,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"22919617\",\"store_name\":\"Flatbush Thai\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:23767859986",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$17.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "ZabbPutawn Brooklyn",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "40 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f158a1c8-73d1-4e90-8248-b17e962a80bc-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/23767859986/store/33284075?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjIzNzY3ODU5OTg2LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjozMzI4NDA3NSwic3RvcmVfbmFtZSI6IlphYmJQdXRhd24gQnJvb2tseW4iLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6IigxMCspIiwiYXZlcmFnZV9yYXRpbmciOjQuOTAwMDAwMDk1MzY3NDMyLCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS9iMGFiYjI0Yi1iZGQ5LTQzYTUtOTAzYS1kMjY5ODAxZGQxZTkuanBlZyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6MTUsImV0YV9kaXNwbGF5X3N0cmluZyI6IjQwIG1pbiIsImhpZ2hsaWdodF9zdHJpbmciOiIiLCJiYWRnZXMiOltdLCJpc19zaGlwcGluZ19vbmx5IjpudWxsfSwiaXNfaG9tZWdyb3duX2xveWFsdHkiOm51bGwsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJzdG9yZUlkIjozMzI4NDA3NSwibWVudUlkIjpudWxsLCJjYXRlZ29yeUlkIjpudWxsLCJidXNpbmVzc0lkIjpudWxsLCJ2ZXJ0aWNhbElkIjpudWxsfQ==&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"23767859986\",\"rating\":{\"average_rating\":4.900000095367432,\"display_num_ratings\":\"(10+)\"},\"store_id\":\"33284075\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":17,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"17\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"23767859986\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f158a1c8-73d1-4e90-8248-b17e962a80bc-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"Pad Thai\",\"item_price\":1700,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"33284075\",\"store_name\":\"ZabbPutawn Brooklyn\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:23925259878",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "(L) PAD THAI",
            "titleTextAttributes": null,
            "subtitle": "$16.00",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "SUKH",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "37 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1e5e6cb-662f-4529-9cad-d0e68e6a0b2d-retina-large.jpg",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/23925259878/store/28825781?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjIzOTI1MjU5ODc4LCJvcHRpb25JZCI6bnVsbCwic2VsZWN0ZWRPcmRlckl0ZW1JZCI6bnVsbCwic3RvcmVMaXRlRGF0YSI6eyJzdG9yZUlkIjoyODgyNTc4MSwic3RvcmVfbmFtZSI6IlNVS0giLCJudW1iZXJfb2ZfcmF0aW5nc19kaXNwbGF5X3N0cmluZyI6IigyMDArKSIsImF2ZXJhZ2VfcmF0aW5nIjo0LjgwMDAwMDE5MDczNDg2Mywic3RvcmVfbG9nb191cmwiOiJodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9MTIwMCxoZWlnaHQ9NjcyLGZvcm1hdD1hdXRvL2h0dHBzOi8vZG9vcmRhc2gtc3RhdGljLnMzLmFtYXpvbmF3cy5jb20vbWVkaWEvcmVzdGF1cmFudC9jb3Zlcl9zcXVhcmUvODEwZjA0NGUtNzRhZi00MjRiLThhZWEtMGJjMDJlZmVlODM3LkpQRyIsImlzX2Rhc2hwYXNzX3BhcnRuZXIiOnRydWUsImRpc3BsYXlfZGVsaXZlcnlfZmVlIjoiJDAgZGVsaXZlcnkgZmVlLCBmaXJzdCBvcmRlciIsIm51bWJlcl9vZl9yYXRpbmdzX2ludCI6NDA0LCJldGFfZGlzcGxheV9zdHJpbmciOiIzNyBtaW4iLCJoaWdobGlnaHRfc3RyaW5nIjoiIiwiYmFkZ2VzIjpbXSwiaXNfc2hpcHBpbmdfb25seSI6bnVsbH0sImlzX2hvbWVncm93bl9sb3lhbHR5IjpudWxsLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwic3RvcmVJZCI6Mjg4MjU3ODEsIm1lbnVJZCI6bnVsbCwiY2F0ZWdvcnlJZCI6bnVsbCwiYnVzaW5lc3NJZCI6bnVsbCwidmVydGljYWxJZCI6bnVsbH0=&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"23925259878\",\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(200+)\"},\"store_id\":\"28825781\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":18,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"18\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"23925259878\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1e5e6cb-662f-4529-9cad-d0e68e6a0b2d-retina-large.jpg\",\"item_is_retail\":false,\"item_name\":\"(L) PAD THAI\",\"item_price\":1600,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"28825781\",\"store_name\":\"SUKH\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "card.dish_item_square:832481188",
        "childrenCount": 0,
        "component": {
            "id": "card.dish_item_square",
            "category": "card",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "30. Pad Thai",
            "titleTextAttributes": null,
            "subtitle": "$13.95",
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": "Thai Leaf (86t St)",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "eta_display_string",
                    "value": "22 min",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": {
                "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dad072fc-5009-4418-9867-f37dad0dea2f-retina-large.JPG",
                "videoUri": null,
                "placeholder": null,
                "local": null,
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "UNSPECIFIED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"item/832481188/store/545078?item_cursor=eyJkbV9pZCI6Iml0ZW1fMSIsImRtX3R5cGUiOiJpdGVtIiwiZG1fdmVyc2lvbiI6MiwiY3Vyc29yX3ZlcnNpb24iOiJJVEVNX1BBR0UiLCJpdGVtSWQiOjgzMjQ4MTE4OCwib3B0aW9uSWQiOm51bGwsInNlbGVjdGVkT3JkZXJJdGVtSWQiOm51bGwsInN0b3JlTGl0ZURhdGEiOnsic3RvcmVJZCI6NTQ1MDc4LCJzdG9yZV9uYW1lIjoiVGhhaSBMZWFmICg4NnQgU3QpIiwibnVtYmVyX29mX3JhdGluZ3NfZGlzcGxheV9zdHJpbmciOiIoNTAwKykiLCJhdmVyYWdlX3JhdGluZyI6NC41LCJzdG9yZV9sb2dvX3VybCI6Imh0dHBzOi8vaW1nLmNkbjRkZC5jb20vY2RuLWNnaS9pbWFnZS9maXQ9Y29udGFpbix3aWR0aD0xMjAwLGhlaWdodD02NzIsZm9ybWF0PWF1dG8vaHR0cHM6Ly9kb29yZGFzaC1zdGF0aWMuczMuYW1hem9uYXdzLmNvbS9tZWRpYS9yZXN0YXVyYW50L2NvdmVyX3NxdWFyZS82YmE3ZTg5YS05MGM3LTRjOTEtYWZlZi1lZjc2MzFmYWJkM2IucG5nIiwiaXNfZGFzaHBhc3NfcGFydG5lciI6dHJ1ZSwiZGlzcGxheV9kZWxpdmVyeV9mZWUiOiIkMCBkZWxpdmVyeSBmZWUsIGZpcnN0IG9yZGVyIiwibnVtYmVyX29mX3JhdGluZ3NfaW50Ijo1NzksImV0YV9kaXNwbGF5X3N0cmluZyI6IjIyIG1pbiIsImhpZ2hsaWdodF9zdHJpbmciOiIiLCJiYWRnZXMiOltdLCJpc19zaGlwcGluZ19vbmx5IjpudWxsfSwiaXNfaG9tZWdyb3duX2xveWFsdHkiOm51bGwsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJzdG9yZUlkIjo1NDUwNzgsIm1lbnVJZCI6bnVsbCwiY2F0ZWdvcnlJZCI6bnVsbCwiYnVzaW5lc3NJZCI6bnVsbCwidmVydGljYWxJZCI6bnVsbH0=&should_navigate_to_store=true&origin_page=xvertical&is_shipping=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": null,
        "custom": "{\"item_id\":\"832481188\",\"item_rating_text\":\"91% (36)\",\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(500+)\"},\"store_id\":\"545078\"}",
        "logging": "{\"attr_src\":\"explore_page\",\"card_position\":19,\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_name\":\"Popular Dishes\",\"container_vertical_position\":\"0\",\"filters_applied\":\"cuisine\",\"horizontal_position\":\"19\",\"is_affordable_meal\":false,\"item_carousel_name\":\"Popular Dishes\",\"item_id\":\"832481188\",\"item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dad072fc-5009-4418-9867-f37dad0dea2f-retina-large.JPG\",\"item_is_retail\":false,\"item_name\":\"30. Pad Thai\",\"item_price\":1395,\"item_score\":0,\"list_filter\":\"cuisine:Thai\",\"merchandising_type\":\"multi_store\",\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"store_id\":\"545078\",\"store_name\":\"Thai Leaf (86t St)\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "carousel.standard:item_carousel:popular_dishes_grid",
        "childrenCount": 20,
        "component": {
            "id": "carousel.standard",
            "category": "carousel",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Popular Dishes",
            "titleTextAttributes": {
                "textStyle": "DLS_TEXT_STYLE_TITLE_1",
                "textColor": "DLS_TEXT_COLOR_UNSPECIFIED",
                "__typename": "FacetV2TextAttributes"
            },
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": null,
            "accessoryTextAttributes": null,
            "description": null,
            "descriptionTextAttributes": null,
            "custom": [],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": null,
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": null,
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{}",
        "logging": "{\"attr_src\":\"explore_page\",\"carousel_name\":\"Popular Dishes\",\"container\":\"cluster\",\"container_id\":\"popular_dishes_grid\",\"container_multiplier\":1,\"container_name\":\"Popular Dishes\",\"container_score\":0,\"is_cross_vertical\":true,\"number_of_items\":20,\"page\":\"explore_page\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "divider.standard:690d3ac3-3f22-4aa4-a5cc-9d7b8f33b31d",
        "childrenCount": 0,
        "component": {
            "id": "divider.standard",
            "category": "divider",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": null,
        "images": null,
        "events": null,
        "style": null,
        "layout": null,
        "custom": null,
        "logging": null,
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:1166654:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Come On Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Dessert",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.1 mi • 22 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1166654/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxOTYxNDY0MzcsMTk2MTQ2NDQwLDEyNDY4ODQ5OTg2XSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMzLDE3N119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"1166654\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:196146439\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7db18966-8c21-415a-aa1a-131eaebb5106-retina-large-jpeg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Drunken Noodle\",\"price\":\"$13.50\",\"rating\":\"100% (14)\"},{\"card_id\":\"card.preview_item:196146438\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f7f624f-bddb-4cb2-b28f-0c29af74b007-retina-large.JPG\"}},\"name\":\"Pad See Ew\",\"price\":\"$13.50\",\"rating\":\"89% (9)\"},{\"card_id\":\"card.preview_item:196146437\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$13.50\",\"rating\":\"93% (30)\"},{\"card_id\":\"card.preview_item:196146405\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a1a8cea1-decf-40fe-9fae-5ba0762f3966-retina-large-jpeg\"}},\"name\":\"Spring Rolls (4 Pieces)\",\"price\":\"$9.00\",\"rating\":\"100% (7)\"},{\"card_id\":\"card.preview_item:196146409\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/002d1e3f-409e-4ea5-a5aa-12a7f18b35cc-retina-large-jpeg\"}},\"name\":\"Curry Puff (3 Pieces)\",\"price\":\"$12.00\",\"rating\":\"100% (10)\"},{\"card_id\":\"card.preview_item:196146411\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d4a39712-d13e-496c-a935-810bfdfa08ee-retina-large-jpeg\"}},\"name\":\"Crab Rangoon \",\"price\":\"$10.00\"},{\"card_id\":\"card.preview_item:196146443\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/44af9eff-89e0-44d4-a229-467cb17ec9f8-retina-large-jpeg\"}},\"name\":\"Green curry\",\"price\":\"$13.50\",\"rating\":\"100% (8)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"e35ca31e-e14a-47fb-94f9-85a2eb481ecd\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":22,\"badges\":\"\",\"business_id\":\"537380\",\"business_vertical_id\":\"0\",\"card_position\":3,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d247722b-fb51-4d15-b083-e768ea06e84e-retina-large-jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/38b449cb-82a3-4a03-a7d7-c22f0291debd.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"271\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.5\",\"store_display_asap_time\":\"22 min\",\"store_distance_in_miles\":1.1482022799513305,\"store_featured_item_cnt\":7,\"store_id\":\"1166654\",\"store_latitude\":40.629097,\"store_longitude\":-74.02859,\"store_name\":\"Come On Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:2477824:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Ricepot Thai Cookhouse",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Rice",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.6 mi • 29 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/2477824/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNTE3ODMyMzQxLDE1MTc4MzIzNDIsMTUxNzgzMjMxN10sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"2477824\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:1517832343\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/be6746ac-b17c-460f-9dc8-2cee0d708594-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Pad See Ew\",\"price\":\"$14.95\",\"rating\":\"91% (80)\"},{\"card_id\":\"card.preview_item:1517832344\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0144ab35-9978-4e15-b512-3303aa0c1b65-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Drunken Noodles\",\"price\":\"$14.95\",\"rating\":\"93% (84)\"},{\"card_id\":\"card.preview_item:1517832341\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai Classic\",\"price\":\"$14.95\",\"rating\":\"80% (98)\"},{\"card_id\":\"card.preview_item:1517832307\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23bfb201-ac8c-4d23-8221-8b8b6531ba92-retina-large.jpg\"}},\"name\":\"Pork Belly Basket\",\"price\":\"$8.95\",\"rating\":\"97% (71)\"},{\"card_id\":\"card.preview_item:2598355618\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e14b9a9f-7b56-42b6-bd2c-5b27f6abceb1-retina-large.jpg\"}},\"name\":\"Currypuff Original (2 pcs)\",\"price\":\"$7.95\",\"rating\":\"93% (55)\"},{\"card_id\":\"card.preview_item:1517832349\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5c3c4e8-dbe3-44f7-a159-619df1e97229-retina-large.jpg\"}},\"name\":\"Pineapple Fried Rice\",\"price\":\"$14.95\",\"rating\":\"93% (58)\"},{\"card_id\":\"card.preview_item:1517832342\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/19ac0411-aa98-445c-8a84-7abaff23468b-retina-large.jpg\"}},\"name\":\"Rice Pot Pad Thai\",\"price\":\"$17.95\",\"rating\":\"91% (32)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"92aced31-5470-4a1d-a32c-c7ea45a492eb\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":29,\"badges\":\"\",\"business_id\":\"983793\",\"business_vertical_id\":\"0\",\"card_position\":4,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/689b0288-a9d8-4142-b529-4811de4999c8.JPG\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1084\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"29 min\",\"store_distance_in_miles\":2.6217664614280385,\"store_featured_item_cnt\":7,\"store_id\":\"2477824\",\"store_latitude\":40.604797,\"store_longitude\":-73.99875,\"store_name\":\"Ricepot Thai Cookhouse\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:30716902:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Lert Ros",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Seafood Restaurant",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.9 mi • 27 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/30716902/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxODIzNzYzNjYyMywxODIzNzY1MzkzMywxODIzNzY1OTkzOF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$6 off on $40+\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(20+)\"},\"savelists\":[],\"store_id\":\"30716902\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:18237636623\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7c15a279-a8c7-4c70-b8df-ffb85ffe7f8a-retina-large.jpg\"}},\"name\":\"Pad Thai\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:18237636624\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/1bf34e79-76eb-4cb9-9d8f-ff5e0e7c17a5-8a09a318-3b57-4802-97e4-8757eab2b890.jpg\"}},\"name\":\"Pad See Ew\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:18237636625\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78201bce-0446-4146-afd1-548ae235988a-retina-large.jpg\"}},\"name\":\"Drunken Noodle\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:18237671712\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1c5095f6-5e11-4e61-8d3c-3d83435da4de-retina-large.jpg\"}},\"name\":\"Spring Roll\",\"price\":\"$7.00\"},{\"card_id\":\"card.preview_item:18237671719\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e4d0d756-5020-47f2-839b-a9e97a633d55-retina-large.png\"}},\"name\":\"Roti Massaman(VG)\",\"price\":\"$11.00\"},{\"card_id\":\"card.preview_item:18237686258\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/6faac530-7b66-4188-9623-c57982b3248d.jpg\"}},\"name\":\"Massaman Curry (VG)\",\"price\":\"$14.00\"},{\"card_id\":\"card.preview_item:18237693906\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/47e13813-28f5-471d-af23-b7ee113e85b8-retina-large.jpg\"}},\"name\":\"Tum Yum\",\"price\":\"$7.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"e790cd72-395d-4c89-8b56-3ee76189ed3e\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78201bce-0446-4146-afd1-548ae235988a-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":27,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:$6 off on $40+,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"13069300\",\"business_vertical_id\":\"0\",\"card_position\":5,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78201bce-0446-4146-afd1-548ae235988a-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78201bce-0446-4146-afd1-548ae235988a-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/4017c63e-346c-4692-abc0-c7baa4dc9472.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T00:55:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"48\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$6 off on $40+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"27 min\",\"store_distance_in_miles\":1.9073243128232207,\"store_featured_item_cnt\":7,\"store_id\":\"30716902\",\"store_latitude\":40.620638,\"store_longitude\":-73.989069,\"store_name\":\"Lert Ros\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_24236644:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "KHao San",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.8 mi • 43 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24236644/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NywxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"24236644\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:10995254631\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7c0a28e1-3ea6-4fff-8b23-44a8e66adf7f-retina-large.png\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Drunken Noodle (V)\",\"price\":\"$16.00\",\"rating\":\"93% (45)\"},{\"card_id\":\"card.preview_item:10995254630\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/83fdc090-7f73-4bda-9432-193332fc62e8-retina-large.png\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Pad See Ew  (V)\",\"price\":\"$16.00\",\"rating\":\"96% (24)\"},{\"card_id\":\"card.preview_item:10995254629\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad Thai (GF)(N)\",\"price\":\"$16.00\",\"rating\":\"93% (40)\"},{\"card_id\":\"card.preview_item:10995319539\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfeb8fd6-5329-4e3f-a60b-e001f85fe6d3-retina-large.png\"}},\"name\":\"Spring Rolls (V)\",\"price\":\"$10.00\",\"rating\":\"100% (13)\"},{\"card_id\":\"card.preview_item:10995319527\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/03ec74dc-1752-4849-90a3-09606827c3ea-retina-large.jpg\"}},\"name\":\"Crab Rangoon\",\"price\":\"$12.00\",\"rating\":\"87% (15)\"},{\"card_id\":\"card.preview_item:10995319535\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/14c462ad-f63d-482e-b4bb-8c08a7b74879-retina-large.png\"}},\"name\":\"Fresh Rolls (V)(GF)\",\"price\":\"$12.00\",\"rating\":\"100% (12)\"},{\"card_id\":\"card.preview_item:13255247205\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3a82c3b-9a5f-440d-bcff-a35f4c2b7463-retina-large.png\"}},\"name\":\"Green Curry (V)(GF) (s)\",\"price\":\"$17.00\",\"rating\":\"100% (21)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"33ef5c4f-b739-48dc-96bb-5e1355dfcc96\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"5c4e1c41-3652-4c0b-9813-db8aeb3f489b\",\"ad_id\":\"418752b0-3905-41f2-9699-2c8a5e6fb0f9\",\"asap_available\":true,\"asap_time\":43,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11333915\",\"campaign_id\":\"4fd8d857-7104-49c1-9fce-194bee9b9ba2\",\"card_position\":6,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\",\"ghost_ad_campaign_ids\":\"94cbe7fd-4fdf-47d4-a10e-adfed2fc0ab9\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3e50ea1d-8d9a-4589-88b1-e849ef8d65bb.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"828\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"43 min\",\"store_distance_in_miles\":3.8338790579132707,\"store_featured_item_cnt\":7,\"store_id\":\"24236644\",\"store_latitude\":40.694664,\"store_longitude\":-73.994156,\"store_name\":\"KHao San\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,177,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_133003:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Corthaiyou",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.5 mi • 31 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/133003/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NiwxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(4k+)\"},\"savelists\":[],\"store_id\":\"133003\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:27720961\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f46f0e6-b7ca-4935-a1b5-65b1c0e7572b-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$16.50\",\"rating\":\"92% (172)\"},{\"card_id\":\"card.preview_item:27720980\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d543dec7-87dd-4748-b302-0833c99a5122-retina-large-jpeg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See Ew\",\"price\":\"$16.50\",\"rating\":\"95% (133)\"},{\"card_id\":\"card.preview_item:27719049\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6b269d8e-b1d9-40df-8697-2d8d202bd2ad-retina-large-jpeg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Crispy Spring Roll\",\"price\":\"$9.50\",\"rating\":\"94% (78)\"},{\"card_id\":\"card.preview_item:27720996\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4bc89c23-60d1-45e3-8ddf-869b34bd8d6b-retina-large-jpeg\"}},\"name\":\"Pad Kee Mow\",\"price\":\"$16.50\",\"rating\":\"98% (55)\"},{\"card_id\":\"card.preview_item:27718967\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5ad483d4-4a17-4261-bd6a-33d06225762b-retina-large-jpeg\"}},\"name\":\"Curry Puff\",\"price\":\"$12.00\",\"rating\":\"96% (67)\"},{\"card_id\":\"card.preview_item:67540712\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d83981e8-31cc-4cde-916b-63ae09a85b1a-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$16.50\",\"rating\":\"89% (46)\"},{\"card_id\":\"card.preview_item:27718999\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/486bda2a-a126-47ef-a764-abde21b2b1f2-retina-large.jpg\"}},\"name\":\"Sriracha Wings\",\"price\":\"$14.00\",\"rating\":\"91% (34)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"e4e1d028-9cc9-4880-8238-623e494fe397\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"8b6b911f-43b7-427a-842a-56ccc4b6d807\",\"ad_id\":\"89e01776-0f5b-4205-a2b8-4e673195c78b\",\"asap_available\":true,\"asap_time\":31,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Sponsored,type:sponsored;\",\"business_id\":\"76210\",\"business_vertical_id\":\"0\",\"campaign_id\":\"f4b24973-9d68-4dde-9ab8-8f14c8adf753\",\"card_position\":7,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"4075\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":2.5039155928092094,\"store_featured_item_cnt\":7,\"store_id\":\"133003\",\"store_latitude\":40.640453,\"store_longitude\":-73.96584,\"store_name\":\"Corthaiyou\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,176,177\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:25937885:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Uni Thai Bistro",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Curry",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.1 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/25937885/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls5OTMzODQwMDc2LDk5MzM4NDAxNDIsOTkzMzg0MDE0NF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc3LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"25937885\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:9933840077\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1fab372-de27-4957-ab17-eeb3fbe76495-retina-large.JPG\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad See Ew\",\"price\":\"$15.00\",\"rating\":\"86% (37)\"},{\"card_id\":\"card.preview_item:9933840076\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c144e4fd-3d06-45ff-bbde-0512cd0a58db-retina-large-jpeg\"}},\"name\":\"Pad Thai\",\"price\":\"$15.00\",\"rating\":\"78% (27)\"},{\"card_id\":\"card.preview_item:9933840078\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87a940df-b5ff-4915-b0db-0eecdb36dcbd-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Drunken Noodles\",\"price\":\"$15.00\",\"rating\":\"79% (28)\"},{\"card_id\":\"card.preview_item:9933840085\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/18a7f23f-2f1a-4edc-a5da-592bbd3c8961-retina-large.jpg\"}},\"name\":\"Spring Rolls (5 Pcs)\",\"price\":\"$7.95\",\"rating\":\"82% (22)\"},{\"card_id\":\"card.preview_item:9933840081\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f8a15fbc-5aea-4371-aac2-3ddb3ae69a36-retina-large-jpeg\"}},\"name\":\"Green Curry\",\"price\":\"$16.00\",\"rating\":\"95% (20)\"},{\"card_id\":\"card.preview_item:9933840086\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8834b12d-811b-4762-a937-cacec678cda9-retina-large.jpg\"}},\"name\":\"Crab Rangoon (5 Pcs)\",\"price\":\"$9.00\",\"rating\":\"83% (12)\"},{\"card_id\":\"card.preview_item:9933840114\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ab9373e5-9c13-4474-9d20-060e10505875-retina-large-jpeg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$15.00\",\"rating\":\"67% (12)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"08f7f4ac-f29d-4080-82b6-500276019242\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87a940df-b5ff-4915-b0db-0eecdb36dcbd-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":30,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11778463\",\"business_vertical_id\":\"0\",\"card_position\":8,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87a940df-b5ff-4915-b0db-0eecdb36dcbd-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87a940df-b5ff-4915-b0db-0eecdb36dcbd-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/18a0aa79-a7f3-4a4a-91ca-d705f90a256b.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"469\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.1415911584085174,\"store_featured_item_cnt\":7,\"store_id\":\"25937885\",\"store_latitude\":40.64578,\"store_longitude\":-73.97319,\"store_name\":\"Uni Thai Bistro\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,177,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:32631951:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "TongDee Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.1 mi • 36 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/32631951/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyMzc1OTU2MTc3MSwyMzc1OTU2MTg0MCwyMzc1OTU2MTgxNl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(50+)\"},\"savelists\":[],\"store_id\":\"32631951\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:23759561771\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f78a8695-0a78-47ff-9ecc-989c5943a103-retina-large.jpg\"}},\"name\":\"Pad Thai\",\"price\":\"$16.95\"},{\"card_id\":\"card.preview_item:23759561773\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a3b17c97-c6e6-49d3-b994-229ee97ee5e4-retina-large.jpg\"}},\"name\":\"Pad Knee Mao (Drunkun Noodle)\",\"price\":\"$16.95\"},{\"card_id\":\"card.preview_item:23759561772\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64a08f61-9a8f-4320-acf5-8e9aecd05eaf-retina-large.jpg\"}},\"name\":\"Pad See Ew\",\"price\":\"$16.95\"},{\"card_id\":\"card.preview_item:23759561742\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b898f59-4334-4e3e-b479-ea95b1def21c-retina-large.jpg\"}},\"name\":\"Veg Spring Roll\",\"price\":\"$8.95\"},{\"card_id\":\"card.preview_item:23759561754\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a83f47a5-6a52-4993-9d15-69627258e18d-retina-large.jpg\"}},\"name\":\"Summer Roll\",\"price\":\"$9.95\"},{\"card_id\":\"card.preview_item:23759561752\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24327b4f-e887-4d43-a037-fd891f09cab6-retina-large.jpg\"}},\"name\":\"Crab Rangoon\",\"price\":\"$10.95\"},{\"card_id\":\"card.preview_item:23759561762\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/00064f36-4853-4b01-ad33-698650b31625-retina-large.jpg\"}},\"name\":\"Green Curry\",\"price\":\"$16.95\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"3657e462-6cfe-4ee1-8a3a-1e3cf5b5e0f0\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64a08f61-9a8f-4320-acf5-8e9aecd05eaf-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":36,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"13871945\",\"business_vertical_id\":\"0\",\"card_position\":9,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64a08f61-9a8f-4320-acf5-8e9aecd05eaf-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64a08f61-9a8f-4320-acf5-8e9aecd05eaf-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/e1050d83-d214-43f9-a9f8-b5966d27a4bf.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"93\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":3.060442511501444,\"store_featured_item_cnt\":7,\"store_id\":\"32631951\",\"store_latitude\":40.677364,\"store_longitude\":-73.97996,\"store_name\":\"TongDee Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:1143613:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "One More Charm",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Salads",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.7 mi • 35 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1143613/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlszNzIwNDk2ODMsMzc2MDc1MzU4LDE5MzQ2NzY5Ml0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTQ0LDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(2k+)\"},\"savelists\":[],\"store_id\":\"1143613\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:376068908\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/27017339-a419-44d2-9dda-4a4ca0eec0f5-retina-large-jpeg\"}},\"name\":\"Pad Se-Ew\",\"price\":\"$14.50\",\"rating\":\"90% (72)\"},{\"card_id\":\"card.preview_item:193467628\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce10b5e6-aa83-47ee-9761-90602becbd83-retina-large-jpeg\"}},\"name\":\"Crispy Spring Roll\",\"price\":\"$11.00\",\"rating\":\"97% (60)\"},{\"card_id\":\"card.preview_item:372049683\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\"}},\"name\":\"Pad Thai (GF)\",\"price\":\"$14.50\",\"rating\":\"89% (112)\"},{\"card_id\":\"card.preview_item:376069954\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bed40c66-31ca-49d5-8fc7-b1ba0d713cfb-retina-large.jpg\"}},\"name\":\"Kea Mao (Drunken Noodle)\",\"price\":\"$14.50\",\"rating\":\"90% (84)\"},{\"card_id\":\"card.preview_item:193467595\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4168defb-d86b-46f2-a9b6-498c9a4bfcb9-retina-large-jpeg\"}},\"name\":\"Green Curry(V/GF)\",\"price\":\"$14.50\",\"rating\":\"96% (27)\"},{\"card_id\":\"card.preview_item:376076530\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c3ec03b8-d42e-4fa9-8f1c-6f0a9421fa76-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$14.50\",\"rating\":\"100% (29)\"},{\"card_id\":\"card.preview_item:193467607\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6e1f359a-8fde-4721-a389-e1b255503753-retina-large-jpeg\"}},\"name\":\"Massaman Curry (V/GF)\",\"price\":\"$14.50\",\"rating\":\"90% (20)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"9a6b3c6d-d296-45c8-aab1-75a523cd77e2\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":35,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"518868\",\"business_vertical_id\":\"0\",\"card_position\":10,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/carousel/9aa09a8e-aef1-4bf3-8923-640d532ce2f1.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"2416\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"35 min\",\"store_distance_in_miles\":2.677046437927717,\"store_featured_item_cnt\":7,\"store_id\":\"1143613\",\"store_latitude\":40.669834,\"store_longitude\":-73.979256,\"store_name\":\"One More Charm\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,144,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:29529765:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Prem Thai Restaurant & Noodle Bar",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Fine Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.8 mi • 37 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/29529765/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNDk2MzQxMjY5MCwyMTI4MjI5MzIwNCwxNDk2MzQwOTIxMl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"29529765\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:14963412691\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ff5ecdad-2309-410f-b002-ed4fe2b73de0-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"See Ew Noodle\",\"price\":\"$18.50\"},{\"card_id\":\"card.preview_item:14963412692\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/72df0714-c134-414b-828c-17f9e7c27a5c-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Drunken Noodle\",\"price\":\"$18.50\"},{\"card_id\":\"card.preview_item:14963412690\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$18.50\"},{\"card_id\":\"card.preview_item:14735250229\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/095239e9-d641-4b21-985a-c1730381d466-retina-large.jpg\"}},\"name\":\"Panang Curry\",\"price\":\"$18.50\"},{\"card_id\":\"card.preview_item:14735250227\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/de084a1f-d1cb-4124-ba00-a3aa7cab66d4-retina-large.jpg\"}},\"name\":\"Green Curry\",\"price\":\"$18.50\"},{\"card_id\":\"card.preview_item:14963409703\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1ec02905-9de6-4c43-8d8c-bc8af780dbea-retina-large.jpg\"}},\"name\":\"Crispy Vegetable Spring Rolls (Vegetarian) (4 Pieces)\",\"price\":\"$11.50\"},{\"card_id\":\"card.preview_item:14963412682\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b0cf71b-6a3c-42a9-80e1-4d7b42eceb86-retina-large.jpg\"}},\"name\":\"Minced Chicken Basil\",\"price\":\"$21.50\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"f07badf4-4eb9-4cb3-b483-cd3178686636\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":37,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"12955404\",\"business_vertical_id\":\"0\",\"card_position\":11,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/4a35c88f-76c8-4a35-bf91-7d0b04511290.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:25:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"224\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":2.764128819746564,\"store_featured_item_cnt\":7,\"store_id\":\"29529765\",\"store_latitude\":40.673485,\"store_longitude\":-73.98253,\"store_name\":\"Prem Thai Restaurant & Noodle Bar\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:213568:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Thaism",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Noodles",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.0 mi • 34 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/213568/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls0NjI4MTM1NSw0NjI4MTM2MCw0NjI4MTMxMV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTQyLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(5k+)\"},\"savelists\":[],\"store_id\":\"213568\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:46281358\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/22e9d4d8-e310-4c48-867c-ef29cdd5e37f-retina-large.jpg\"}},\"name\":\"Pad See Ew\",\"price\":\"$14.95\",\"rating\":\"92% (225)\"},{\"card_id\":\"card.preview_item:46281359\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b41fb23f-3dac-4f59-93d7-1a2e0ac0e3df-retina-large.jpg\"}},\"name\":\"Drunken Noodle Kea Mao\",\"price\":\"$14.95\",\"rating\":\"95% (261)\"},{\"card_id\":\"card.preview_item:46281360\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\"}},\"name\":\"Pad Thai (Gluten Free)\",\"price\":\"$14.95\",\"rating\":\"85% (270)\"},{\"card_id\":\"card.preview_item:46281247\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a3201550-664a-4120-a4d8-839b07364862-retina-large.jpg\"}},\"name\":\"Spring Roll\",\"price\":\"$8.50\",\"rating\":\"76% (127)\"},{\"card_id\":\"card.preview_item:46281349\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b13a8859-cdcd-48d1-b8fe-faa932def1dd-retina-large.jpg\"}},\"name\":\"Spicy Basil Fried Rice\",\"price\":\"$14.95\",\"rating\":\"91% (91)\"},{\"card_id\":\"card.preview_item:46281312\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7a948f68-d980-4a31-b941-31dfdea6c729-retina-large.jpg\"}},\"name\":\"Spicy Basil\",\"price\":\"$14.95\",\"rating\":\"94% (70)\"},{\"card_id\":\"card.preview_item:46281376\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/75aa378d-0ab2-4c6e-bbfa-dc6af6c2399d-retina-large.jpg\"}},\"name\":\"Lemongrass Tom Yum Soup (Gluten Free)\",\"price\":\"$7.50\",\"rating\":\"89% (61)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"75444c7d-4b59-42a5-a8c2-a7d98e0dad0b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":34,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"114540\",\"business_vertical_id\":\"0\",\"card_position\":12,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0f8d98c1-8129-4c0a-b9de-bfddb8199916.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"5571\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":false,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"34 min\",\"store_distance_in_miles\":3.043520460681142,\"store_featured_item_cnt\":7,\"store_id\":\"213568\",\"store_latitude\":40.682476,\"store_longitude\":-73.99345,\"store_name\":\"Thaism\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,142,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:24236644:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "KHao San",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Curry",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.8 mi • 43 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24236644/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMDk5NTI1NDYyOSwxMDk5NTI1NDYyMCwxMDk5NTMwNjU2NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc3LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$7 off on $60+\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"24236644\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:10995254631\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7c0a28e1-3ea6-4fff-8b23-44a8e66adf7f-retina-large.png\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Drunken Noodle (V)\",\"price\":\"$16.00\",\"rating\":\"93% (45)\"},{\"card_id\":\"card.preview_item:10995254630\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/83fdc090-7f73-4bda-9432-193332fc62e8-retina-large.png\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Pad See Ew  (V)\",\"price\":\"$16.00\",\"rating\":\"96% (24)\"},{\"card_id\":\"card.preview_item:10995254629\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad Thai (GF)(N)\",\"price\":\"$16.00\",\"rating\":\"93% (40)\"},{\"card_id\":\"card.preview_item:10995319539\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfeb8fd6-5329-4e3f-a60b-e001f85fe6d3-retina-large.png\"}},\"name\":\"Spring Rolls (V)\",\"price\":\"$10.00\",\"rating\":\"100% (13)\"},{\"card_id\":\"card.preview_item:10995319527\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/03ec74dc-1752-4849-90a3-09606827c3ea-retina-large.jpg\"}},\"name\":\"Crab Rangoon\",\"price\":\"$12.00\",\"rating\":\"87% (15)\"},{\"card_id\":\"card.preview_item:10995319535\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/14c462ad-f63d-482e-b4bb-8c08a7b74879-retina-large.png\"}},\"name\":\"Fresh Rolls (V)(GF)\",\"price\":\"$12.00\",\"rating\":\"100% (12)\"},{\"card_id\":\"card.preview_item:13255247205\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3a82c3b-9a5f-440d-bcff-a35f4c2b7463-retina-large.png\"}},\"name\":\"Green Curry (V)(GF) (s)\",\"price\":\"$17.00\",\"rating\":\"100% (21)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"3f8e3cb4-4f61-44b2-a40c-aee037978fb8\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":43,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:$7 off on $60+,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11333915\",\"business_vertical_id\":\"0\",\"card_position\":13,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f5fff31-81e3-483e-9aec-e3afe9ad38ed-retina-large.png\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3e50ea1d-8d9a-4589-88b1-e849ef8d65bb.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"828\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$7 off on $60+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"43 min\",\"store_distance_in_miles\":3.8338790579132707,\"store_featured_item_cnt\":7,\"store_id\":\"24236644\",\"store_latitude\":40.694664,\"store_longitude\":-73.994156,\"store_name\":\"KHao San\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,177,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_213568:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Thaism",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.0 mi • 34 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/213568/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE0MiwxNzUsMTc2LDE3NywxNzksMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(5k+)\"},\"savelists\":[],\"store_id\":\"213568\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:46281358\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/22e9d4d8-e310-4c48-867c-ef29cdd5e37f-retina-large.jpg\"}},\"name\":\"Pad See Ew\",\"price\":\"$14.95\",\"rating\":\"92% (225)\"},{\"card_id\":\"card.preview_item:46281359\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b41fb23f-3dac-4f59-93d7-1a2e0ac0e3df-retina-large.jpg\"}},\"name\":\"Drunken Noodle Kea Mao\",\"price\":\"$14.95\",\"rating\":\"95% (261)\"},{\"card_id\":\"card.preview_item:46281360\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\"}},\"name\":\"Pad Thai (Gluten Free)\",\"price\":\"$14.95\",\"rating\":\"85% (270)\"},{\"card_id\":\"card.preview_item:46281247\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a3201550-664a-4120-a4d8-839b07364862-retina-large.jpg\"}},\"name\":\"Spring Roll\",\"price\":\"$8.50\",\"rating\":\"76% (127)\"},{\"card_id\":\"card.preview_item:46281349\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b13a8859-cdcd-48d1-b8fe-faa932def1dd-retina-large.jpg\"}},\"name\":\"Spicy Basil Fried Rice\",\"price\":\"$14.95\",\"rating\":\"91% (91)\"},{\"card_id\":\"card.preview_item:46281312\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7a948f68-d980-4a31-b941-31dfdea6c729-retina-large.jpg\"}},\"name\":\"Spicy Basil\",\"price\":\"$14.95\",\"rating\":\"94% (70)\"},{\"card_id\":\"card.preview_item:46281376\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/75aa378d-0ab2-4c6e-bbfa-dc6af6c2399d-retina-large.jpg\"}},\"name\":\"Lemongrass Tom Yum Soup (Gluten Free)\",\"price\":\"$7.50\",\"rating\":\"89% (61)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"72c3211b-b62b-430a-9100-4ba35947317a\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"e02cb462-c33d-4728-83fb-002931b90391\",\"ad_id\":\"3061e005-9f62-4f10-a547-77fa3fae2011\",\"asap_available\":true,\"asap_time\":34,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"114540\",\"business_vertical_id\":\"0\",\"campaign_id\":\"c200d782-cc88-4921-8a0f-c0317d85b819\",\"card_position\":14,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae1feb-e8cc-4fe7-ae51-52e3a33b465f-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0f8d98c1-8129-4c0a-b9de-bfddb8199916.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"5571\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":false,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"34 min\",\"store_distance_in_miles\":3.043520460681142,\"store_featured_item_cnt\":7,\"store_id\":\"213568\",\"store_latitude\":40.682476,\"store_longitude\":-73.99345,\"store_name\":\"Thaism\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,142,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_872479:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "GOOG Thai Cook Shop",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.5 mi • 42 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/872479/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTQ0LDE3NiwxNzcsMTkzLDE5NSwyODRdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"872479\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:17106764906\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c01c84c9-4146-46c0-ae09-92c8cd40eefd-retina-large.jpg\"}},\"name\":\"Pad Se Ew\",\"price\":\"$19.00\"},{\"card_id\":\"card.preview_item:17106749786\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a052a96-c305-44d9-a840-ef35c155387f-retina-large.jpg\"}},\"name\":\"Somtum\",\"price\":\"$16.00\"},{\"card_id\":\"card.preview_item:17106764905\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Traditional Pad Thai\",\"price\":\"$19.00\",\"rating\":\"93% (14)\"},{\"card_id\":\"card.preview_item:17106764907\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1dc2ced1-92f7-4aed-9f18-8df91e921edc-retina-large.jpg\"}},\"name\":\"Pad Ga-Prao\",\"price\":\"$19.00\"},{\"card_id\":\"card.preview_item:17106764912\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/554e53f5-25e2-408b-8d70-4042d9dfaf03-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"'Thai Railway' fried rice\",\"price\":\"$18.00\",\"rating\":\"100% (6)\"},{\"card_id\":\"card.preview_item:17106749780\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/740cd2c5-3d61-4f46-9a89-e628065a21fa-retina-large.jpg\"}},\"name\":\"Nam Pla' fried chicken\",\"price\":\"$15.00\"},{\"card_id\":\"card.preview_item:17106752037\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5f50a9a-16f8-488f-aa7e-c8e6b10169a8-retina-large.jpg\"}},\"name\":\"GOOG's Signature Green Curry\",\"price\":\"$22.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"a0232966-f95c-4dfc-962a-6242dcc6d6bf\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"22a7d4ff-92bf-4aba-89a8-2c531d2663a8\",\"ad_id\":\"2261f852-8ec0-4310-b0bd-0e5ce093fe62\",\"asap_available\":true,\"asap_time\":42,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"12915291\",\"campaign_id\":\"17801277-8bff-461e-8bdb-fd9416934b50\",\"card_position\":15,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/fcc54bf5-2f9d-4dd4-9394-ffbdc7659bfa.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"1908\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"42 min\",\"store_distance_in_miles\":2.4832361952344506,\"store_featured_item_cnt\":7,\"store_id\":\"872479\",\"store_latitude\":40.677074,\"store_longitude\":-74.013336,\"store_name\":\"GOOG Thai Cook Shop\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,144,176,177,193,195,284\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:133003:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Corthaiyou",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Noodles",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.5 mi • 31 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/133003/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNzcyMDk2MSwyNzcxOTk5Miw0NDE0MDEwMzRdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NiwxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(4k+)\"},\"savelists\":[],\"store_id\":\"133003\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:27720961\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f46f0e6-b7ca-4935-a1b5-65b1c0e7572b-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$16.50\",\"rating\":\"92% (172)\"},{\"card_id\":\"card.preview_item:27720980\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d543dec7-87dd-4748-b302-0833c99a5122-retina-large-jpeg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See Ew\",\"price\":\"$16.50\",\"rating\":\"95% (133)\"},{\"card_id\":\"card.preview_item:27719049\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6b269d8e-b1d9-40df-8697-2d8d202bd2ad-retina-large-jpeg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Crispy Spring Roll\",\"price\":\"$9.50\",\"rating\":\"94% (78)\"},{\"card_id\":\"card.preview_item:27720996\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4bc89c23-60d1-45e3-8ddf-869b34bd8d6b-retina-large-jpeg\"}},\"name\":\"Pad Kee Mow\",\"price\":\"$16.50\",\"rating\":\"98% (55)\"},{\"card_id\":\"card.preview_item:27718967\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5ad483d4-4a17-4261-bd6a-33d06225762b-retina-large-jpeg\"}},\"name\":\"Curry Puff\",\"price\":\"$12.00\",\"rating\":\"96% (67)\"},{\"card_id\":\"card.preview_item:67540712\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d83981e8-31cc-4cde-916b-63ae09a85b1a-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$16.50\",\"rating\":\"89% (46)\"},{\"card_id\":\"card.preview_item:27718999\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/486bda2a-a126-47ef-a764-abde21b2b1f2-retina-large.jpg\"}},\"name\":\"Sriracha Wings\",\"price\":\"$14.00\",\"rating\":\"91% (34)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"295ed15a-79f1-4bfb-8fbc-642db61260ee\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":31,\"badges\":\"\",\"business_id\":\"76210\",\"business_vertical_id\":\"0\",\"card_position\":16,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8baa9248-4eb3-4ae4-9518-1f783a2fd829-retina-large-jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"4075\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":2.5039155928092094,\"store_featured_item_cnt\":7,\"store_id\":\"133003\",\"store_latitude\":40.640453,\"store_longitude\":-73.96584,\"store_name\":\"Corthaiyou\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,176,177\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:28825781:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "SUKH",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.7 mi • 37 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/28825781/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyMzkyNTI1OTg3OCwyMzkyNTM2MDgxNCwyMzkyNTM2MDgxNV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"28825781\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:23921846360\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/302ef2f1-74a2-4020-ab58-d7e92ae7711f-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"SUKH PADTHAI\",\"price\":\"$27.00\",\"rating\":\"100% (11)\"},{\"card_id\":\"card.preview_item:23925787009\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3cb542fa-77a5-4a39-92e5-cd7e6b546cf8-retina-large.jpg\"}},\"name\":\"KEA MAO\",\"price\":\"$19.00\"},{\"card_id\":\"card.preview_item:23925787008\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ef7b3cb0-f416-437f-9f8d-5b294beaeaae-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"PAD SE-EW\",\"price\":\"$19.00\",\"rating\":\"100% (11)\"},{\"card_id\":\"card.preview_item:23925395473\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b7848268-3672-49c9-91db-8b462b114a08-retina-large.jpg\"}},\"name\":\"CURRY SAMOSA\",\"price\":\"$14.00\",\"rating\":\"100% (7)\"},{\"card_id\":\"card.preview_item:23925410752\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/955e8b93-843a-46fb-b4ba-c1e90a42864e-retina-large.jpg\"}},\"name\":\"SOMTUM THAI KAI KEM\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:23921846368\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/50a6cfe8-e43d-4f22-9b27-32321b62e71e-retina-large.jpg\"}},\"name\":\"KAPRAW MOO\",\"price\":\"$22.00\"},{\"card_id\":\"card.preview_item:23925395474\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1507da97-a62a-4284-8a53-e61c985cbce6-retina-large.jpg\"}},\"name\":\"POR PIA TOD\",\"price\":\"$10.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"00a41dde-46f5-412a-a9b9-ec90ac1f737b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ef7b3cb0-f416-437f-9f8d-5b294beaeaae-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":37,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"12874670\",\"business_vertical_id\":\"0\",\"card_position\":17,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ef7b3cb0-f416-437f-9f8d-5b294beaeaae-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ef7b3cb0-f416-437f-9f8d-5b294beaeaae-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/76e000a1-97ba-496c-b7fc-6c084c25f866.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"404\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":3.7384433178945353,\"store_featured_item_cnt\":7,\"store_id\":\"28825781\",\"store_latitude\":40.687319,\"store_longitude\":-73.976378,\"store_name\":\"SUKH\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:23077508:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Bangkok Boulevard",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Salads, Seafood",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.0 mi • 31 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/23077508/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMjk5MzIyMTk1NCwyNDQ5NjQxMjYwOSwyNDc3NTg0NjI1NF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"15% off, up to $7\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"23077508\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:12993221955\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6ee6e414-606d-4493-942f-def81260b1d6-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See You\",\"price\":\"$14.95\",\"rating\":\"92% (77)\"},{\"card_id\":\"card.preview_item:12993221913\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e3d1c526-5c34-4139-8009-6fb38e81ab7b-retina-large.png\"}},\"name\":\"Crispy Spring Rolls\",\"price\":\"$8.95\",\"rating\":\"92% (26)\"},{\"card_id\":\"card.preview_item:12993221954\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Pad Thai\",\"price\":\"$14.95\",\"rating\":\"90% (105)\"},{\"card_id\":\"card.preview_item:12993221927\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b4b1d47c-fa51-4574-9940-32e52be9426f-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Pad Kee Mao\",\"price\":\"$14.95\",\"rating\":\"96% (46)\"},{\"card_id\":\"card.preview_item:12993221886\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e043bc84-51eb-479a-8f1e-e0407abc9fbd-retina-large.JPG\"}},\"name\":\"Crab Rangoon\",\"price\":\"$10.95\",\"rating\":\"93% (40)\"},{\"card_id\":\"card.preview_item:12993221943\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cf46a869-995b-450c-a9b3-23a731a979ac-3106c30c-14b7-4dff-a0d6-58ede067422b-retina-large.jpg\"}},\"name\":\"Curry Puffs\",\"price\":\"$8.95\",\"rating\":\"94% (32)\"},{\"card_id\":\"card.preview_item:12993221958\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b90cd14c-74af-4337-92a6-a01e0a149ca2-retina-large.jpg\"}},\"name\":\"Pineapple Fried Rice\",\"price\":\"$14.95\",\"rating\":\"97% (33)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"c84f8ae0-d630-43fa-a0a6-3cb996f7d54b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":31,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:15% off up to $7,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"114097\",\"business_vertical_id\":\"0\",\"card_position\":18,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92ed6a19-b280-4e64-9961-031d6ff80af4-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/114097.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:00:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"977\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"15% off, up to $7\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":2.0386404026079705,\"store_featured_item_cnt\":7,\"store_id\":\"23077508\",\"store_latitude\":40.658504,\"store_longitude\":-73.98213,\"store_name\":\"Bangkok Boulevard\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:872479:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "GOOG Thai Cook Shop",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Pad Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.5 mi • 42 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/872479/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNzEwNjc2NDkxMiwxNzEwNjc2NDkwNSwxNzEwNjc0OTc4NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNDQsMTc2LDE3NywxOTMsMTk1LDI4NF19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"872479\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:17106764906\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c01c84c9-4146-46c0-ae09-92c8cd40eefd-retina-large.jpg\"}},\"name\":\"Pad Se Ew\",\"price\":\"$19.00\"},{\"card_id\":\"card.preview_item:17106749786\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a052a96-c305-44d9-a840-ef35c155387f-retina-large.jpg\"}},\"name\":\"Somtum\",\"price\":\"$16.00\"},{\"card_id\":\"card.preview_item:17106764905\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Traditional Pad Thai\",\"price\":\"$19.00\",\"rating\":\"93% (14)\"},{\"card_id\":\"card.preview_item:17106764907\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1dc2ced1-92f7-4aed-9f18-8df91e921edc-retina-large.jpg\"}},\"name\":\"Pad Ga-Prao\",\"price\":\"$19.00\"},{\"card_id\":\"card.preview_item:17106764912\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/554e53f5-25e2-408b-8d70-4042d9dfaf03-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"'Thai Railway' fried rice\",\"price\":\"$18.00\",\"rating\":\"100% (6)\"},{\"card_id\":\"card.preview_item:17106749780\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/740cd2c5-3d61-4f46-9a89-e628065a21fa-retina-large.jpg\"}},\"name\":\"Nam Pla' fried chicken\",\"price\":\"$15.00\"},{\"card_id\":\"card.preview_item:17106752037\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5f50a9a-16f8-488f-aa7e-c8e6b10169a8-retina-large.jpg\"}},\"name\":\"GOOG's Signature Green Curry\",\"price\":\"$22.00\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"0c642540-25d9-4a2a-b34a-185a3a45be3a\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":42,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:20% off up to $5,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"12915291\",\"business_vertical_id\":\"0\",\"card_position\":19,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5141ae68-349f-41b9-9080-e0a0c52a5722-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/fcc54bf5-2f9d-4dd4-9394-ffbdc7659bfa.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1908\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"42 min\",\"store_distance_in_miles\":2.4832361952344506,\"store_featured_item_cnt\":7,\"store_id\":\"872479\",\"store_latitude\":40.677074,\"store_longitude\":-74.013336,\"store_name\":\"GOOG Thai Cook Shop\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,144,176,177,193,195,284\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:545078:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Thai Leaf (86t St)",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Pickup, Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.5 mi • 22 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/545078/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls4MzI0ODExODgsODMyNDgxMjMzLDgzMjQ4MTIxMl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"545078\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:832481188\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dad072fc-5009-4418-9867-f37dad0dea2f-retina-large.JPG\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"30. Pad Thai\",\"price\":\"$13.95\",\"rating\":\"92% (36)\"},{\"card_id\":\"card.preview_item:832481187\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3a958adc-d3a4-4a42-9876-03f0bc15803f-retina-large.PNG\"}},\"name\":\"32. Pad See Yu\",\"price\":\"$13.95\",\"rating\":\"85% (27)\"},{\"card_id\":\"card.preview_item:832481233\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/142dfa9a-cd3f-49e3-b96a-f95a9eab4724-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"7. Thai Chicken Wing\",\"price\":\"$8.95\",\"rating\":\"98% (54)\"},{\"card_id\":\"card.preview_item:832480929\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ec4ec915-0458-48c7-a76d-5e0be94d2285-retina-large.jpg\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"39. Khao Pahd Bar Saranee (Basil Fried Rice)\",\"price\":\"$12.95\",\"rating\":\"90% (51)\"},{\"card_id\":\"card.preview_item:832481191\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c54e6e5b-f05b-4d59-a2e4-4f760e8b537c-retina-large.JPG\"}},\"name\":\"33. Pad Kee Mao\",\"price\":\"$13.95\",\"rating\":\"86% (14)\"},{\"card_id\":\"card.preview_item:832481239\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/49d6c7bb-f498-4f01-bd19-bc01a9c951c2-retina-large.JPG\"}},\"name\":\"4. Po Pia (Spring Rolls) (3)\",\"price\":\"$5.95\",\"rating\":\"81% (16)\"},{\"card_id\":\"card.preview_item:832481235\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36f615f6-028a-4829-8cd6-79362408d3e0-retina-large.JPG\"}},\"name\":\"14. Curry Samosa\",\"price\":\"$7.95\",\"rating\":\"83% (6)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"dad6f614-8ed3-44f7-a04b-5d8316aba516\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/142dfa9a-cd3f-49e3-b96a-f95a9eab4724-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":22,\"badges\":\"\",\"business_id\":\"93443\",\"business_vertical_id\":\"0\",\"card_position\":20,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/142dfa9a-cd3f-49e3-b96a-f95a9eab4724-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/142dfa9a-cd3f-49e3-b96a-f95a9eab4724-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/dddbc2e5-e5fa-46d8-961b-26f00a16e9d0.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"579\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.5\",\"store_display_asap_time\":\"22 min\",\"store_distance_in_miles\":1.538692360401332,\"store_featured_item_cnt\":7,\"store_id\":\"545078\",\"store_latitude\":40.620243,\"store_longitude\":-74.02382,\"store_name\":\"Thai Leaf (86t St)\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:1286818:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Jintana Thai farmhouse",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.4 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1286818/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlszMDg4MzA5MjEsNjk1ODEzMjU5MCwyMzQzMTY1NjMyXSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMyLDEwMDMzMywxNzUsMTc2LDE3NywxNzksMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"1286818\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:308830927\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6d4460b3-ec4a-48f2-b2f9-9ad8d8144614-retina-large.png\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See Yew\",\"price\":\"$16.00\",\"rating\":\"94% (82)\"},{\"card_id\":\"card.preview_item:308831384\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae8b8f99-0ba1-45f9-9fa1-021b468ebaa6-retina-large.JPG\"}},\"name\":\"Superpower Green Curry\",\"price\":\"$18.00\",\"rating\":\"92% (61)\"},{\"card_id\":\"card.preview_item:308830921\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Jintana's Original Pad Thai\",\"price\":\"$16.00\",\"rating\":\"84% (128)\"},{\"card_id\":\"card.preview_item:308831111\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a88c716-7bcc-4f31-82fe-05d12d0d78cb-retina-large.jpg\"}},\"name\":\"Pad Krapow\",\"price\":\"$16.00\",\"rating\":\"100% (47)\"},{\"card_id\":\"card.preview_item:308831416\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8dafca39-1ca7-47c9-af2c-7b70a9c853ef-retina-large.jpg\"}},\"name\":\"Poh Pia Tod\",\"price\":\"$10.00\",\"rating\":\"94% (51)\"},{\"card_id\":\"card.preview_item:308831957\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b174c62c-122c-4c2a-a997-01a935c4c0a6-retina-large.JPG\"}},\"name\":\"Panang Curry\",\"price\":\"$18.00\",\"rating\":\"90% (48)\"},{\"card_id\":\"card.preview_item:308832532\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aa6b3a87-9518-4d72-a53d-e96977a0d8bb-retina-large.jpg\"}},\"name\":\"Green Papaya Salad\",\"price\":\"$14.00\",\"rating\":\"85% (34)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"eb248268-8fa8-4745-b2c9-f1eaf2c65ddc\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":30,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:20% off up to $5,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"600802\",\"business_vertical_id\":\"0\",\"card_position\":21,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8a40569f-881c-4d73-9c2a-e93ce4348b7c.png\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1250\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.413199468773089,\"store_featured_item_cnt\":7,\"store_id\":\"1286818\",\"store_latitude\":40.666534,\"store_longitude\":-73.981964,\"store_name\":\"Jintana Thai farmhouse\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_1143613:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "One More Charm",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.7 mi • 35 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1143613/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE0NCwxNzUsMTc2LDE3NywxNzksMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(2k+)\"},\"savelists\":[],\"store_id\":\"1143613\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:376068908\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/27017339-a419-44d2-9dda-4a4ca0eec0f5-retina-large-jpeg\"}},\"name\":\"Pad Se-Ew\",\"price\":\"$14.50\",\"rating\":\"90% (72)\"},{\"card_id\":\"card.preview_item:193467628\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce10b5e6-aa83-47ee-9761-90602becbd83-retina-large-jpeg\"}},\"name\":\"Crispy Spring Roll\",\"price\":\"$11.00\",\"rating\":\"97% (60)\"},{\"card_id\":\"card.preview_item:372049683\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\"}},\"name\":\"Pad Thai (GF)\",\"price\":\"$14.50\",\"rating\":\"89% (112)\"},{\"card_id\":\"card.preview_item:376069954\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bed40c66-31ca-49d5-8fc7-b1ba0d713cfb-retina-large.jpg\"}},\"name\":\"Kea Mao (Drunken Noodle)\",\"price\":\"$14.50\",\"rating\":\"90% (84)\"},{\"card_id\":\"card.preview_item:193467595\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4168defb-d86b-46f2-a9b6-498c9a4bfcb9-retina-large-jpeg\"}},\"name\":\"Green Curry(V/GF)\",\"price\":\"$14.50\",\"rating\":\"96% (27)\"},{\"card_id\":\"card.preview_item:376076530\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c3ec03b8-d42e-4fa9-8f1c-6f0a9421fa76-retina-large.jpg\"}},\"name\":\"Basil Fried Rice\",\"price\":\"$14.50\",\"rating\":\"100% (29)\"},{\"card_id\":\"card.preview_item:193467607\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6e1f359a-8fde-4721-a389-e1b255503753-retina-large-jpeg\"}},\"name\":\"Massaman Curry (V/GF)\",\"price\":\"$14.50\",\"rating\":\"90% (20)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"2e723439-b7b0-4fbc-9a4e-fc3c146d2e17\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"7bb4607e-8458-43ec-ab7d-0ef0506251a1\",\"ad_id\":\"bcc966cb-88c0-4b6b-b402-06272139cb8d\",\"asap_available\":true,\"asap_time\":35,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"518868\",\"business_vertical_id\":\"0\",\"campaign_id\":\"d1ffe51f-42d1-4e58-a9ba-b302bb1f21ca\",\"card_position\":22,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddd33d25-c64c-4092-97f8-6019b8aa4b9e-retina-large.jpg\",\"ghost_ad_campaign_ids\":\"e34264e7-c71d-4bfc-918c-ad3729e268af\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/carousel/9aa09a8e-aef1-4bf3-8923-640d532ce2f1.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"2416\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"35 min\",\"store_distance_in_miles\":2.677046437927717,\"store_featured_item_cnt\":7,\"store_id\":\"1143613\",\"store_latitude\":40.669834,\"store_longitude\":-73.979256,\"store_name\":\"One More Charm\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,144,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_1286818:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Jintana Thai farmhouse",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.4 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1286818/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"1286818\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:308830927\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6d4460b3-ec4a-48f2-b2f9-9ad8d8144614-retina-large.png\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See Yew\",\"price\":\"$16.00\",\"rating\":\"94% (82)\"},{\"card_id\":\"card.preview_item:308831384\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae8b8f99-0ba1-45f9-9fa1-021b468ebaa6-retina-large.JPG\"}},\"name\":\"Superpower Green Curry\",\"price\":\"$18.00\",\"rating\":\"92% (61)\"},{\"card_id\":\"card.preview_item:308830921\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Jintana's Original Pad Thai\",\"price\":\"$16.00\",\"rating\":\"84% (128)\"},{\"card_id\":\"card.preview_item:308831111\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a88c716-7bcc-4f31-82fe-05d12d0d78cb-retina-large.jpg\"}},\"name\":\"Pad Krapow\",\"price\":\"$16.00\",\"rating\":\"100% (47)\"},{\"card_id\":\"card.preview_item:308831416\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8dafca39-1ca7-47c9-af2c-7b70a9c853ef-retina-large.jpg\"}},\"name\":\"Poh Pia Tod\",\"price\":\"$10.00\",\"rating\":\"94% (51)\"},{\"card_id\":\"card.preview_item:308831957\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b174c62c-122c-4c2a-a997-01a935c4c0a6-retina-large.JPG\"}},\"name\":\"Panang Curry\",\"price\":\"$18.00\",\"rating\":\"90% (48)\"},{\"card_id\":\"card.preview_item:308832532\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aa6b3a87-9518-4d72-a53d-e96977a0d8bb-retina-large.jpg\"}},\"name\":\"Green Papaya Salad\",\"price\":\"$14.00\",\"rating\":\"85% (34)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"55273550-8515-4bd4-8ef1-6546ddcf00a6\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"f8cd5ce4-fd95-4625-9fb1-76dd9b18ccaa\",\"ad_id\":\"27767cfb-8e03-499e-b6b3-65cf96bd00e7\",\"asap_available\":true,\"asap_time\":30,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"600802\",\"business_vertical_id\":\"0\",\"campaign_id\":\"b9a0b5a3-e186-4bf0-b8d2-defa12b60aa4\",\"card_position\":23,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ed9f7c-512e-4bfa-a790-a57226d5a200-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8a40569f-881c-4d73-9c2a-e93ce4348b7c.png\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"1250\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.413199468773089,\"store_featured_item_cnt\":7,\"store_id\":\"1286818\",\"store_latitude\":40.666534,\"store_longitude\":-73.981964,\"store_name\":\"Jintana Thai farmhouse\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:2554242:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "bangkok degree",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Salads",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.0 mi • 36 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/2554242/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNzM4OTY5NjI3NywxNzM4OTY5NDA5OCwxNzM4OTY5Njc2NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$5 off on $25+\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"2554242\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[{\"card_id\":\"card.preview_item:17389696278\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1888b263-ad7e-4ae0-b541-e3553f2fe4f7-npp-retina-large.png\"}},\"most_liked\":\"#2 Most Liked\",\"name\":\"Pad See-Ew\",\"price\":\"$18.00\",\"rating\":\"93% (58)\"},{\"card_id\":\"card.preview_item:17389696279\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6fac3393-3eb4-4a1f-8a2f-8c26f495df98-retina-large.JPG\"}},\"most_liked\":\"#1 Most Liked\",\"name\":\"Drunken Noodle\",\"price\":\"$18.00\",\"rating\":\"95% (77)\"},{\"card_id\":\"card.preview_item:17389696277\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg\"}},\"most_liked\":\"#3 Most Liked\",\"name\":\"Pad Thai (GF)\",\"price\":\"$18.00\",\"rating\":\"96% (27)\"},{\"card_id\":\"card.preview_item:17389682436\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/50030045-45db-4a27-9e84-97814d3a9fe9-retina-large.jpg\"}},\"name\":\"Homemade Spring Rolls (V)\",\"price\":\"$12.00\",\"rating\":\"83% (6)\"},{\"card_id\":\"card.preview_item:17389696596\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1e68a689-9c66-404c-9e0c-c54f669742b9-retina-large.jpg\"}},\"name\":\"Panang Curry (V, GF)\",\"price\":\"$18.00\",\"rating\":\"100% (6)\"},{\"card_id\":\"card.preview_item:17389696595\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0ae26e14-7edc-4e68-800e-cf522602efc0-retina-large.JPG\"}},\"name\":\"Green Curry (V, GF)\",\"price\":\"$18.00\"},{\"card_id\":\"card.preview_item:17389696597\",\"image\":{\"actions\":[],\"fit_type\":\"FIT_TYPE_PLATFORM_DEFAULT_UNSPECIFIED\",\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9078deef-543e-4fa5-ace6-a4cf7c455191-retina-large.jpg\"}},\"name\":\"Massaman Curry (V, GF)\",\"price\":\"$18.00\",\"rating\":\"100% (8)\"}],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"f64e124b-f29f-4f30-a6e0-57cec1dea921\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":36,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:$5 off on $25+,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"1009737\",\"business_vertical_id\":\"0\",\"card_position\":24,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3d789b07-39f4-48e3-8c94-f6987f2833e7-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/fc174fba-dd19-4cea-84c9-76ef9ec0d7cd.JPG\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"912\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$5 off on $25+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":3.0448532616898785,\"store_featured_item_cnt\":7,\"store_id\":\"2554242\",\"store_latitude\":40.674637,\"store_longitude\":-73.97583,\"store_name\":\"bangkok degree\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,193,195\",\"store_relevant_item_cnt\":0,\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:1900237:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Huge Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Soup",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.5 mi • 34 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1900237/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls3MTU5NjE2MDIsNTE0NTcyMjU0Niw3MTU5NjE1OTldLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"15% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"1900237\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"8ece115d-56e0-4952-a467-5d1a020c37c6\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/196ac07c-9463-4823-bb3a-303800ecec8c-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":34,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:15% off up to $5,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"871763\",\"business_vertical_id\":\"0\",\"card_position\":25,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/196ac07c-9463-4823-bb3a-303800ecec8c-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/196ac07c-9463-4823-bb3a-303800ecec8c-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d153ccc5-4b2e-422b-8fbb-696e9e0f2ad5.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:00:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1691\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"15% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"34 min\",\"store_distance_in_miles\":3.475476471415987,\"store_id\":\"1900237\",\"store_latitude\":40.688923,\"store_longitude\":-73.99277,\"store_name\":\"Huge Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:132982:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Nourish",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Noodles",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.5 mi • 39 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/132982/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMzQ1MjkzMzQsMTM0NTI5MzEwLDI0OTEwNDY4MzczXSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMzLDE0MiwxNzYsMTc3LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(10k+)\"},\"savelists\":[],\"store_id\":\"132982\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"ce3874ae-9edd-46a5-b314-3b176390aacc\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/76171.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":39,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"76171\",\"business_vertical_id\":\"0\",\"card_position\":26,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/76171.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/76171.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/76171.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"12196\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"39 min\",\"store_distance_in_miles\":3.466996159090499,\"store_id\":\"132982\",\"store_latitude\":40.67797,\"store_longitude\":-73.968666,\"store_name\":\"Nourish\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,142,176,177,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:29943680:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Muse cocktail and Thai kitchen",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.6 mi • 38 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/29943680/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNjczODk0NDAwNF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $12\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"29943680\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"c17bd167-2652-4c53-8e85-b705dba6623e\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f29d0049-d488-45cf-815a-369969f3f88f-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":38,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:20% off up to $12,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"13009404\",\"business_vertical_id\":\"0\",\"card_position\":27,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f29d0049-d488-45cf-815a-369969f3f88f-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f29d0049-d488-45cf-815a-369969f3f88f-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/944c4bd0-50fd-474a-901a-9f9388bb8a44.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":1,\"num_star_rating\":\"211\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $12\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"38 min\",\"store_distance_in_miles\":3.603336494337925,\"store_id\":\"29943680\",\"store_latitude\":40.67675,\"store_longitude\":-73.96338,\"store_name\":\"Muse cocktail and Thai kitchen\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:24580173:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Beds Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Seafood",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "4.3 mi • 70 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24580173/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlszNjA1NDU2NDI1LDM2MDU0NTY0MjAsMzYwNTQ1NjQyNl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$5 off on $35+\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"24580173\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"26565092-03ff-49fe-8547-ed5cdec83fd3\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/e26d2c91-18ef-49a4-8603-9be0eac96c13.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":70,\"badge_campaign_ids\":\"null\",\"badges\":\"text:$5 off on $35+,type:offer;\",\"business_id\":\"11420189\",\"business_vertical_id\":\"0\",\"card_position\":28,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/e26d2c91-18ef-49a4-8603-9be0eac96c13.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/e26d2c91-18ef-49a4-8603-9be0eac96c13.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9dcbaa41-0c29-4ec2-bfb1-b79a56975641.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1777\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$5 off on $35+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"70 min\",\"store_distance_in_miles\":4.260075301815234,\"store_id\":\"24580173\",\"store_latitude\":40.682743,\"store_longitude\":-73.953636,\"store_name\":\"Beds Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:22919617:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Flatbush Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Soup",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.1 mi • 36 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/22919617/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyMjY0NDcyNTkxLDIyNjQ0NzI2MDAsMjI2NDQ3MjY2MF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc3XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"22919617\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"5e2c570b-6665-4524-b1e0-faf008f50918\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/626927f8-309b-4ad6-b0b1-2ca37e892ef3-retina-large.JPG\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":36,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11066748\",\"business_vertical_id\":\"0\",\"card_position\":29,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/626927f8-309b-4ad6-b0b1-2ca37e892ef3-retina-large.JPG\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/626927f8-309b-4ad6-b0b1-2ca37e892ef3-retina-large.JPG\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/78320f81-53b1-4c68-9b86-96114fc5b730.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"277\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":false,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":3.0785899818611377,\"store_id\":\"22919617\",\"store_latitude\":40.66001,\"store_longitude\":-73.96042,\"store_name\":\"Flatbush Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_29529765:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Prem Thai Restaurant & Noodle Bar",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.8 mi • 37 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/29529765/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"29529765\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"c1a27711-4a45-4fe4-bac1-4b20b5b17b64\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"fe554244-958b-44d2-8970-532f9b20827a\",\"ad_id\":\"3455a8ba-2679-43d3-99ec-be9fb36a567f\",\"asap_available\":true,\"asap_time\":37,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:Sponsored,type:sponsored;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"12955404\",\"campaign_id\":\"ae352fc9-8d2f-48bb-8da8-b55927afc8e0\",\"card_position\":30,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c244ffd9-a8a1-4db9-83b0-f2fcb0ab99d1-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/4a35c88f-76c8-4a35-bf91-7d0b04511290.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:25:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"224\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":2.764128819746564,\"store_id\":\"29529765\",\"store_latitude\":40.673485,\"store_longitude\":-73.98253,\"store_name\":\"Prem Thai Restaurant & Noodle Bar\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:ad_2477824:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Ricepot Thai Cookhouse",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": " • Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.6 mi • 29 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/2477824/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"2477824\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"e004fdb4-27a3-4dda-83b0-44fcd2a7d0d7\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\"}}}}}",
        "logging": "{\"ad_auction_id\":\"d0c9e3eb-719b-90bf-1c9e-5f018a3d49a3\",\"ad_group_id\":\"3bdad258-20b0-48ac-bd4b-9532a3ba0317\",\"ad_id\":\"cbccdd3f-0d87-4f78-b193-b26a9c2a9549\",\"asap_available\":true,\"asap_time\":29,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Sponsored,type:sponsored;\",\"business_id\":\"983793\",\"business_vertical_id\":\"0\",\"campaign_id\":\"0f02321f-e88a-44e3-aa1d-8c31abe0f48e\",\"card_position\":31,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f13c11a-5841-433b-a040-0ec94175d0c0-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/689b0288-a9d8-4142-b529-4811de4999c8.JPG\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":true,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:52Z\",\"num_item\":0,\"num_star_rating\":\"1084\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"29 min\",\"store_distance_in_miles\":2.6217664614280385,\"store_id\":\"2477824\",\"store_latitude\":40.604797,\"store_longitude\":-73.99875,\"store_name\":\"Ricepot Thai Cookhouse\",\"store_prediction_score\":0,\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:1528637:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "The Nuaa Table",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Vegetarian",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.5 mi • 39 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1528637/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls4NTMwNzQ3MzQ3LDg1MzA3NDczNTRdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE0NCwxNzUsMTc2LDE3NywxNzksMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(2k+)\"},\"savelists\":[],\"store_id\":\"1528637\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"a179e83f-e2f7-429c-85c7-3c9f014eeba9\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":39,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"731393\",\"business_vertical_id\":\"0\",\"card_position\":32,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca1dec7b-96ca-45b2-a50e-2815655ecc93-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/21462170-9454-4cb5-96e8-217ee5b31cd7.png\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:25:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":2,\"num_star_rating\":\"2037\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"39 min\",\"store_distance_in_miles\":3.5383603715998895,\"store_id\":\"1528637\",\"store_latitude\":40.679195,\"store_longitude\":-73.968414,\"store_name\":\"The Nuaa Table\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,144,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:24893991:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Holic Thai Bistro",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Fried Rice",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "4.2 mi • 54 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24893991/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls3ODc4MDUyOTAyLDc4NzgwNTI5MDUsMTI5MDQzMzU1MDFdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTc3LDE5MywxOTUsMjg0XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.800000190734863,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"24893991\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"9255b5a1-3097-420b-be0e-8738a29e482c\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74a318a5-881e-4b49-a7d7-ea7e953ec884-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":54,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11542494\",\"business_vertical_id\":\"0\",\"card_position\":33,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74a318a5-881e-4b49-a7d7-ea7e953ec884-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74a318a5-881e-4b49-a7d7-ea7e953ec884-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/ac9dc593-277c-489e-acd2-783a90b1f132.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"322\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.8\",\"store_display_asap_time\":\"54 min\",\"store_distance_in_miles\":4.211446481946152,\"store_id\":\"24893991\",\"store_latitude\":40.678192,\"store_longitude\":-73.94984,\"store_name\":\"Holic Thai Bistro\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,193,195,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:8484:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Lemongrass Grill",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Curry",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.5 mi • 38 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/8484/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNTgxNjMzNjksMTU4MTYzNTM1LDE1ODE2MzM5NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMTkzLDE5NSwyODRdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"8484\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"0466bb40-ae74-4802-b5e8-d692a42fc077\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/932ee67f-59ff-45d4-87d2-99bc534af961.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":38,\"badges\":\"\",\"business_id\":\"6822\",\"business_vertical_id\":\"0\",\"card_position\":34,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/932ee67f-59ff-45d4-87d2-99bc534af961.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/932ee67f-59ff-45d4-87d2-99bc534af961.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c1ed4987-0ba2-4de0-bcb0-dc591b75c195.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1077\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"38 min\",\"store_distance_in_miles\":3.4547543977172195,\"store_id\":\"8484\",\"store_latitude\":40.688652,\"store_longitude\":-73.99295,\"store_name\":\"Lemongrass Grill\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,193,195,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:30856840:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Elephant District",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "4.4 mi • 49 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/30856840/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNzc1OTQ4OTYyNSwyMDMxODYwMDU5NiwyMDMxODYwMDUyMF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"15% off, up to $12\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(50+)\"},\"savelists\":[],\"store_id\":\"30856840\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"e79f71cf-fd1e-4c26-836d-ba225af281bd\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1620c9e-b76c-48f4-b5a9-ba6f0f55304d-retina-large.jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":49,\"badge_campaign_ids\":\"null\",\"badges\":\"text:15% off up to $12,type:offer;\",\"business_id\":\"13085081\",\"business_vertical_id\":\"0\",\"card_position\":35,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1620c9e-b76c-48f4-b5a9-ba6f0f55304d-retina-large.jpeg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1620c9e-b76c-48f4-b5a9-ba6f0f55304d-retina-large.jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/ef3723c0-e9bb-4d54-af78-2a81db833da2.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:25:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"70\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"15% off, up to $12\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"49 min\",\"store_distance_in_miles\":4.392151612767533,\"store_id\":\"30856840\",\"store_latitude\":40.70294,\"store_longitude\":-73.99376,\"store_name\":\"Elephant District\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:33284075:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "ZabbPutawn Brooklyn",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.3 mi • 40 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/33284075/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyMzc2Nzg1OTk4NiwyMzc2Nzg1OTk2MSwyMzc2Nzg1OTk4N10sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.900000095367432,\"display_num_ratings\":\"(10+)\"},\"savelists\":[],\"store_id\":\"33284075\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"98313f01-c9dc-4380-bb1d-4b35ad3351f7\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ab7662eb-bf32-432c-95f3-bdcce84a772e-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":40,\"badges\":\"\",\"business_id\":\"14043579\",\"business_vertical_id\":\"0\",\"card_position\":36,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ab7662eb-bf32-432c-95f3-bdcce84a772e-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ab7662eb-bf32-432c-95f3-bdcce84a772e-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/36560086-1df2-48be-86db-0e7d2458d585.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"15\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.9\",\"store_display_asap_time\":\"40 min\",\"store_distance_in_miles\":3.276503832946603,\"store_id\":\"33284075\",\"store_latitude\":40.686176,\"store_longitude\":-73.99392,\"store_name\":\"ZabbPutawn Brooklyn\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:23903760:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Luck thai restaurant",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Noodles",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.5 mi • 33 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/23903760/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls0MzU0Mjk2Nzg1LDQzNTQyOTQ3ODYsNDM1NDI5OTYyOF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"23903760\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"f8cce417-51fc-4b56-9b68-a47cee9b961c\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac20a0a0-af30-4084-83fe-81c0e021ce50-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":33,\"badges\":\"\",\"business_id\":\"11272665\",\"business_vertical_id\":\"0\",\"card_position\":37,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac20a0a0-af30-4084-83fe-81c0e021ce50-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac20a0a0-af30-4084-83fe-81c0e021ce50-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/aba82c11-03c9-43dc-8767-f7e875fdc892.png\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T00:55:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"602\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"33 min\",\"store_distance_in_miles\":2.548766314022811,\"store_id\":\"23903760\",\"store_latitude\":40.67095,\"store_longitude\":-73.98492,\"store_name\":\"Luck thai restaurant\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:32912211:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Jaew Thai Cuisine",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.0 mi • 25 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/32912211/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyMzQ1NDI2NDM3MSwyMzQ1NDEwNjM0MiwyMzQ1NDI2NDM2N10sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"savelists\":[],\"store_id\":\"32912211\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"86b4609d-2fd0-4d81-9aab-c8aa72b34434\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1939a21a-c51f-4167-8f83-148be8ac6f52-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":25,\"badges\":\"\",\"business_id\":\"13949397\",\"business_vertical_id\":\"0\",\"card_position\":38,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1939a21a-c51f-4167-8f83-148be8ac6f52-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1939a21a-c51f-4167-8f83-148be8ac6f52-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/615bb7a3-07fe-4797-b8c4-1d0faa50ade7.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"0\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"0.0\",\"store_display_asap_time\":\"25 min\",\"store_distance_in_miles\":1.9793239351149223,\"store_id\":\"32912211\",\"store_latitude\":40.644098,\"store_longitude\":-73.976017,\"store_name\":\"Jaew Thai Cuisine\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:34124433:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "SriPraPhai by Wonder",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "0.9 mi • 31 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/34124433/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNTY1NTE0NTA0OV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$5 off on $20+\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"savelists\":[],\"store_id\":\"34124433\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"83f108e7-16cc-4ddf-9aa0-773d07db3be9\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20ca5224-f2da-4fcb-9d8e-70e9ef53413c-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":31,\"badge_campaign_ids\":\"null\",\"badges\":\"text:$5 off on $20+,type:offer;\",\"business_id\":\"12930247\",\"business_vertical_id\":\"0\",\"card_position\":39,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20ca5224-f2da-4fcb-9d8e-70e9ef53413c-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20ca5224-f2da-4fcb-9d8e-70e9ef53413c-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/1aad785f-73f2-46dc-a81c-3ad6da5135c9.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":1,\"num_star_rating\":\"0\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$5 off on $20+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"0.0\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":0.9468041857120767,\"store_id\":\"34124433\",\"store_latitude\":40.629262,\"store_longitude\":-74.022574,\"store_name\":\"SriPraPhai by Wonder\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:787798:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Udom Thai Restaurant & Bar",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Takeout, Pickup",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.6 mi • 35 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/787798/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNTQwNTE2MzAsMTU0MDUxNjUzLDE1NDA1MTY2NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMjg0XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"787798\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"1f7a4086-e40c-466e-8c6a-a174acdc5914\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d9c3e442-8a03-4d55-9526-ae1a9bfc4a2a-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":35,\"badges\":\"\",\"business_id\":\"19631\",\"business_vertical_id\":\"0\",\"card_position\":40,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d9c3e442-8a03-4d55-9526-ae1a9bfc4a2a-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d9c3e442-8a03-4d55-9526-ae1a9bfc4a2a-retina-large-jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/eed480a5-0f22-4393-baf5-4656283804e1.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:05:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1641\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":false,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.5\",\"store_display_asap_time\":\"35 min\",\"store_distance_in_miles\":3.6249820065790175,\"store_id\":\"787798\",\"store_latitude\":40.677376,\"store_longitude\":-73.96359,\"store_name\":\"Udom Thai Restaurant & Bar\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:24509608:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "To Be Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Iced Teas, Salads",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.8 mi • 24 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24509608/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls2MzM1NTIxMTI5LDYzMzU1MTQyMTksNjMzNTUxOTYyMl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"24509608\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"fd49ac82-cab0-4750-b697-11087c593395\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f9f7798f-2a25-421f-84dc-caa525562404-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":24,\"badges\":\"\",\"business_id\":\"282480\",\"business_vertical_id\":\"0\",\"card_position\":41,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f9f7798f-2a25-421f-84dc-caa525562404-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f9f7798f-2a25-421f-84dc-caa525562404-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/812d6404-b31e-43cd-9e70-ff37ad072a29.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"358\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"24 min\",\"store_distance_in_miles\":1.8489498414563017,\"store_id\":\"24509608\",\"store_latitude\":40.64272,\"store_longitude\":-73.978355,\"store_name\":\"To Be Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:23245484:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Cafe Chili-Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Asian Food, Vegan",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.4 mi • 35 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/23245484/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyOTE3NjAxMzQ2LDI5MTc2MDEzNzQsMjkxNzYwMTMwMF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(50+)\"},\"savelists\":[],\"store_id\":\"23245484\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"dafcef56-0956-46bd-8b39-7ed185644c38\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b706bd63-7816-4f28-8481-94de1a761233-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":35,\"badge_campaign_ids\":\"null\",\"badges\":\"text:20% off up to $5,type:offer;\",\"business_id\":\"11158776\",\"business_vertical_id\":\"0\",\"card_position\":42,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b706bd63-7816-4f28-8481-94de1a761233-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b706bd63-7816-4f28-8481-94de1a761233-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d5f8ce0c-683e-467b-97bb-9ede440d7b93.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"97\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"35 min\",\"store_distance_in_miles\":3.4076114337289365,\"store_id\":\"23245484\",\"store_latitude\":40.688023,\"store_longitude\":-73.99331,\"store_name\":\"Cafe Chili-Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:28829:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Dao Palate",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Vegan, samosa",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.3 mi • 37 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/28829/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls1NjE1NzM5Miw1NjE1ODU4NSw1NjE1NzQxNl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"},{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"28829\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"11734a19-9302-45e2-b004-7cfa4de64fab\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cc4dcf27-3cdc-4d9a-a264-c3e3d6e59e2a-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":37,\"badge_campaign_ids\":\"null, null\",\"badges\":\"text:20% off up to $5,type:offer;text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"19457\",\"business_vertical_id\":\"0\",\"card_position\":43,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cc4dcf27-3cdc-4d9a-a264-c3e3d6e59e2a-retina-large-jpeg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cc4dcf27-3cdc-4d9a-a264-c3e3d6e59e2a-retina-large-jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/19457.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1491\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":3.31571885462287,\"store_id\":\"28829\",\"store_latitude\":40.67791,\"store_longitude\":-73.97293,\"store_name\":\"Dao Palate\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:336152:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Han Dynasty",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Chinese, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.8 mi • 42 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/336152/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE0MiwxNDQsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"$10 off on $100+\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(10k+)\"},\"savelists\":[],\"store_id\":\"336152\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"934c1329-e847-460b-ac7d-cd9ff8aa20db\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f70e7030-b74b-4484-9500-1d946ae7ecb2-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":42,\"badge_campaign_ids\":\"null\",\"badges\":\"text:$10 off on $100+,type:offer;\",\"business_id\":\"7616\",\"business_vertical_id\":\"0\",\"card_position\":44,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f70e7030-b74b-4484-9500-1d946ae7ecb2-retina-large-jpeg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f70e7030-b74b-4484-9500-1d946ae7ecb2-retina-large-jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f70e7030-b74b-4484-9500-1d946ae7ecb2-retina-large-jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T05:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":0,\"num_star_rating\":\"16076\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"$10 off on $100+\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"42 min\",\"store_distance_in_miles\":3.830716314072515,\"store_id\":\"336152\",\"store_latitude\":40.691345,\"store_longitude\":-73.982506,\"store_name\":\"Han Dynasty\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,142,144,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:637738:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Wanisa Home Kitchen",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Seafood",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.4 mi • 34 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/637738/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNDA3ODQ0NjU0MywyNDA3ODcyNjcyOCwyNDA3ODg1NDM1OV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTVdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $5\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"637738\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"4511b37b-ee30-4935-951a-11e743ea60bd\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/90d2e088-6df1-41be-a46e-cffa197661af-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":34,\"badge_campaign_ids\":\"null\",\"badges\":\"text:20% off up to $5,type:offer;\",\"business_id\":\"294576\",\"business_vertical_id\":\"0\",\"card_position\":45,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/90d2e088-6df1-41be-a46e-cffa197661af-retina-large-jpeg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/90d2e088-6df1-41be-a46e-cffa197661af-retina-large-jpeg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/294576.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:50:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1366\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $5\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"34 min\",\"store_distance_in_miles\":3.39013771572779,\"store_id\":\"637738\",\"store_latitude\":40.686947,\"store_longitude\":-73.990326,\"store_name\":\"Wanisa Home Kitchen\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:214211:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Kor Tor Mor",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Noodles",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.2 mi • 42 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/214211/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNjQ0OTU2MTgsMTY0NDk1NTk5LDE2NDQ5NTU5Nl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMTkzLDE5NSwyODRdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"214211\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"16665362-a817-4ac6-9ee8-06b74ff07769\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6cd39370-10ca-40a4-b7d0-92688ab4dcd5-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":42,\"badges\":\"\",\"business_id\":\"114323\",\"business_vertical_id\":\"0\",\"card_position\":46,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6cd39370-10ca-40a4-b7d0-92688ab4dcd5-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6cd39370-10ca-40a4-b7d0-92688ab4dcd5-retina-large-jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/114323.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"554\",\"page\":\"explore_page\",\"pickup_available\":false,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"42 min\",\"store_distance_in_miles\":3.215640010268055,\"store_id\":\"214211\",\"store_latitude\":40.684692,\"store_longitude\":-73.99188,\"store_name\":\"Kor Tor Mor\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,193,195,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:33649197:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Xisan De Classic",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Asian Food",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.8 mi • 34 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/33649197/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNDQ1NTg1ODA0NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"DDF4F4\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"none\",\"placement\":\"descriptor\",\"text\":\"20% off, up to $15\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.900000095367432,\"display_num_ratings\":\"(10+)\"},\"savelists\":[],\"store_id\":\"33649197\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"5dd9c414-da61-42b8-91d3-d438c0cdc11c\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e140a5cd-8888-47f7-bda4-a175cc4963ef-9bc18a00-3586-4bf9-ba17-781745bcf91b-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":34,\"badge_campaign_ids\":\"null\",\"badges\":\"text:20% off up to $15,type:offer;\",\"business_id\":\"14143059\",\"business_vertical_id\":\"0\",\"card_position\":47,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e140a5cd-8888-47f7-bda4-a175cc4963ef-9bc18a00-3586-4bf9-ba17-781745bcf91b-retina-large.jpg\",\"eligible_promo_campaign_ids\":\"\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e140a5cd-8888-47f7-bda4-a175cc4963ef-9bc18a00-3586-4bf9-ba17-781745bcf91b-retina-large.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/983eead3-cb23-491f-8263-b235d593328f.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":1,\"num_star_rating\":\"10\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"promo_ad_group_id\":\"\",\"promo_ad_id\":\"\",\"promo_campaign_id\":\"\",\"promo_enrichment_id\":\"\",\"promotion_title\":\"20% off, up to $15\",\"promotion_type\":\"\",\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.9\",\"store_display_asap_time\":\"34 min\",\"store_distance_in_miles\":3.842999488778065,\"store_id\":\"33649197\",\"store_latitude\":40.694614,\"store_longitude\":-73.99328,\"store_name\":\"Xisan De Classic\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:34060615:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Ler Lers",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "4.7 mi • 64 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/34060615/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNTA2NTkwODE1NiwyNTA2NTg0MzM3MywyNTA2NTcyMjcyMl0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":5,\"display_num_ratings\":\"(10+)\"},\"savelists\":[],\"store_id\":\"34060615\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"f63cc26c-d148-47b9-adb5-659d01e892a3\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/eff5c9e4-ba2a-48cd-a56a-a6e9ff548c7e-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":64,\"badges\":\"\",\"business_id\":\"14253513\",\"business_vertical_id\":\"0\",\"card_position\":48,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/eff5c9e4-ba2a-48cd-a56a-a6e9ff548c7e-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/eff5c9e4-ba2a-48cd-a56a-a6e9ff548c7e-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/6eec3e39-94fb-4bb7-bd75-bfa3f84a9e7d.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:40:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"18\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"5.0\",\"store_display_asap_time\":\"64 min\",\"store_distance_in_miles\":4.6747076622999755,\"store_id\":\"34060615\",\"store_latitude\":40.683142,\"store_longitude\":-73.943728,\"store_name\":\"Ler Lers\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:432139:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "StangThai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Thai, Banh Mi",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.9 mi • 36 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/432139/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls1MzcwMDU4OCw1MzcwMDIxNiwzOTQ3MTE0NTVdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTc3XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"432139\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"64e34319-51e0-4545-acc3-2c3248ac7236\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/0800f297-0a01-4aa7-aff7-3622c7d03f34.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":36,\"badges\":\"\",\"business_id\":\"207847\",\"business_vertical_id\":\"0\",\"card_position\":49,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/0800f297-0a01-4aa7-aff7-3622c7d03f34.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/yelp/0800f297-0a01-4aa7-aff7-3622c7d03f34.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d4229134-c317-4f99-8ce2-753eb11598d2.629\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:05:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"618\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":1.8829659937345031,\"store_id\":\"432139\",\"store_latitude\":40.648373,\"store_longitude\":-73.97894,\"store_name\":\"StangThai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:23568725:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Red Bowl",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Asian Food, Dim Sum",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.5 mi • 20 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/23568725/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlszNjE1NjI1NzAzXSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMzLDE0NCwxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[{\"background_color\":\"E7E7E7\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"warning\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"\",\"is_dashpass\":false,\"leading_icon\":\"trophy/fill\",\"on_click\":\"https://www.doordash.com/social_content_discovery/v1/list/632065403325954391/?origin_page=homepage\",\"placement\":\"descriptor\",\"text\":\"Customer favorite\",\"trailing_icon\":\"chevron/right\",\"type\":\"top_rated_leaderboard\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"23568725\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"cf8364b8-32f8-42dd-a423-7939c05c1530\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/4211f628-4cc5-4527-9c94-8f2c5c901b09.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":20,\"badge_campaign_ids\":\"null\",\"badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"business_id\":\"11222832\",\"business_vertical_id\":\"0\",\"card_position\":50,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/4211f628-4cc5-4527-9c94-8f2c5c901b09.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/4211f628-4cc5-4527-9c94-8f2c5c901b09.jpg\",\"has_offer_badges\":true,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/504e664b-a5d4-46f9-b1d2-58733bb64099.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":1,\"num_star_rating\":\"289\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"refinement_badges\":\"text:Customer favorite,type:top_rated_leaderboard,keyword:Customer favorites;\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"20 min\",\"store_distance_in_miles\":1.5003626976977227,\"store_id\":\"23568725\",\"store_latitude\":40.62395,\"store_longitude\":-74.031006,\"store_name\":\"Red Bowl\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,144,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:24902152:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Mr Wonton",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Chinese, Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.1 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/24902152/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMzIzNzc0MTYxLDEzMjM3NzQxNTUsMTMyMzc3NDE2NV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.699999809265137,\"display_num_ratings\":\"(1k+)\"},\"savelists\":[],\"store_id\":\"24902152\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"ef9b27aa-93f4-4fda-b685-a32980ece97b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fed6eba-62a3-480a-8afc-a65fb54edbd6-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"19363\",\"business_vertical_id\":\"0\",\"card_position\":51,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fed6eba-62a3-480a-8afc-a65fb54edbd6-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fed6eba-62a3-480a-8afc-a65fb54edbd6-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/967ae874-64f0-49d9-ba77-e7d5ac5e1f4e.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"1077\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.7\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":3.104953971147828,\"store_id\":\"24902152\",\"store_latitude\":40.675144,\"store_longitude\":-73.97485,\"store_name\":\"Mr Wonton\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:2358251:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Spice",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Cocktail Bar, Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.1 mi • 40 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/2358251/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlszMDAwMzQ2Mzc3LDMwMDAzNDYzMjMsMzAwMDM0NjMzNV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc3XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.5,\"display_num_ratings\":\"(500+)\"},\"savelists\":[],\"store_id\":\"2358251\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"d347da01-20df-405a-bfdf-23ed9d3cbb4b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ea18b93-a711-4ce4-806f-aa5d25f5b50d-retina-large.JPG\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":40,\"badges\":\"\",\"business_id\":\"934992\",\"business_vertical_id\":\"0\",\"card_position\":52,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ea18b93-a711-4ce4-806f-aa5d25f5b50d-retina-large.JPG\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ea18b93-a711-4ce4-806f-aa5d25f5b50d-retina-large.JPG\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d343db3d-58ab-4d32-abb2-02d7406e0bcd.png\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:45:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"520\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.5\",\"store_display_asap_time\":\"40 min\",\"store_distance_in_miles\":3.131439690142863,\"store_id\":\"2358251\",\"store_latitude\":40.675552,\"store_longitude\":-73.9747,\"store_name\":\"Spice\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:25091974:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "MA",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Fried Rice, Salads",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.7 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/25091974/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOls4ODkwOTg0Nzc1LDg5MjMwMjAyNjYsOTI0MTAyNzEyOF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzddfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(50+)\"},\"savelists\":[],\"store_id\":\"25091974\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"4e36480e-6251-41af-bb05-e0e5f41d4e3b\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e677d17-7983-4de0-966b-49a89add5bc2-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"11640528\",\"business_vertical_id\":\"0\",\"card_position\":53,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e677d17-7983-4de0-966b-49a89add5bc2-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e677d17-7983-4de0-966b-49a89add5bc2-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0ea2eb9e-c5a1-46b3-be2b-53c8bce7c543.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"99\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":3.736245659340662,\"store_id\":\"25091974\",\"store_latitude\":40.686535,\"store_longitude\":-73.97482,\"store_name\":\"MA\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:313308:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Hing Wong",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Takeout, Chinese",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.2 mi • 23 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/313308/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InRoYWkiLCJ2ZXJ0aWNhbF9pZCI6bnVsbCwidmVydGljYWxfbmFtZSI6IiJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzIsMTAwMzMzLDE3NSwxNzYsMTc3LDE3OSwxOTMsMTk1XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.300000190734863,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"313308\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"54cfde6f-d9f7-46f7-9b92-1af8adaaf9e9\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca959f7d-02b1-42f0-9fa4-13bc379e31e5-retina-large.JPG\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":23,\"badges\":\"\",\"business_id\":\"93601\",\"business_vertical_id\":\"0\",\"card_position\":54,\"consumer_id\":\"\",\"container\":\"store\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca959f7d-02b1-42f0-9fa4-13bc379e31e5-retina-large.JPG\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca959f7d-02b1-42f0-9fa4-13bc379e31e5-retina-large.JPG\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/01d350ad-844f-49de-b108-33551e5dbf46.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:00:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":0,\"num_star_rating\":\"366\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.3\",\"store_display_asap_time\":\"23 min\",\"store_distance_in_miles\":1.1823425156542995,\"store_id\":\"313308\",\"store_latitude\":40.625977,\"store_longitude\":-74.02404,\"store_name\":\"Hing Wong\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:214049:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Green Lake Express",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Chinese, Asian Fusion",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.0 mi • 31 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/214049/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxNTgyNTMxNDEsMTU4MjUzMTUzXSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMyLDEwMDMzMywxNzUsMTc2LDE3NywxNzksMTkzLDE5NV19&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.400000095367432,\"display_num_ratings\":\"(3k+)\"},\"savelists\":[],\"store_id\":\"214049\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"bcc5759d-29e2-4bab-92d6-ee3a0956cbe7\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/043bcb00-77af-4241-b7fb-125824aba6fd-retina-large.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":31,\"badges\":\"\",\"business_id\":\"114359\",\"business_vertical_id\":\"0\",\"card_position\":55,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/043bcb00-77af-4241-b7fb-125824aba6fd-retina-large.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/043bcb00-77af-4241-b7fb-125824aba6fd-retina-large.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8e24707c-578e-4919-b077-c4b37f763006.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":2,\"num_star_rating\":\"3356\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.4\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":2.974233879655007,\"store_id\":\"214049\",\"store_latitude\":40.65324,\"store_longitude\":-73.959175,\"store_name\":\"Green Lake Express\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:215705:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "No.1 Chinese Restaurant",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Chinese, Soup",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "2.1 mi • 30 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/215705/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMTkzNTE4ODMsMTM1MDk4NjIwXSwic2VhcmNoX3Rlcm0iOiJ0aGFpIiwidmVydGljYWxfaWQiOm51bGwsInZlcnRpY2FsX25hbWUiOiIifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTAwMzMzLDE3NywyODRdfQ==&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.300000190734863,\"display_num_ratings\":\"(3k+)\"},\"savelists\":[],\"store_id\":\"215705\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"dba89a1b-16cb-4368-9eb6-10bced2c02bc\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aed9372e-549f-4a11-ab52-8c88167daa48-retina-large.JPG\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"114412\",\"business_vertical_id\":\"0\",\"card_position\":56,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aed9372e-549f-4a11-ab52-8c88167daa48-retina-large.JPG\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aed9372e-549f-4a11-ab52-8c88167daa48-retina-large.JPG\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5fc21d45-60bd-4b26-8c60-16ec4f74c008.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T06:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":2,\"num_star_rating\":\"3414\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.3\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.0889265086095024,\"store_id\":\"215705\",\"store_latitude\":40.635757,\"store_longitude\":-73.97435,\"store_name\":\"No.1 Chinese Restaurant\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:544612:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Brother's Asian Cuisine",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$$ • Chinese, Thai",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "1.5 mi • 19 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/544612/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMDQyNTE5MjA0MF0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMiwxMDAzMzMsMTc1LDE3NiwxNzcsMTc5LDE5MywxOTUsMjg0XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.599999904632568,\"display_num_ratings\":\"(200+)\"},\"savelists\":[],\"store_id\":\"544612\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"9f4ccfad-3941-446a-b6f3-2d3d667077a8\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/ceca2267-0225-4dd5-9493-14ddb1f052a8.jpg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":19,\"badges\":\"\",\"business_id\":\"252974\",\"business_vertical_id\":\"0\",\"card_position\":57,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/ceca2267-0225-4dd5-9493-14ddb1f052a8.jpg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/ugc/ceca2267-0225-4dd5-9493-14ddb1f052a8.jpg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c4736b1e-6738-446f-bccb-d25ee85efe7f.jpg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:15:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":1,\"num_star_rating\":\"344\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":2,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.6\",\"store_display_asap_time\":\"19 min\",\"store_distance_in_miles\":1.5284024435066166,\"store_id\":\"544612\",\"store_latitude\":40.62212,\"store_longitude\":-74.02845,\"store_name\":\"Brother's Asian Cuisine\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100332,100333,175,176,177,179,193,195,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:33975761:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Prospect Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Casual Dining",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.7 mi • 32 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/33975761/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsyNTAwNzc0MjA1MiwyNTAwNzc0MjA1NSwyNTAwNzc0MjA2OV0sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzM119&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"savelists\":[],\"store_id\":\"33975761\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"180446a0-c9be-423e-b971-16b616290031\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67cc62cf-c4b2-4c19-b677-990e453d1df6-retina-large.jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":32,\"badges\":\"\",\"business_id\":\"14231135\",\"business_vertical_id\":\"0\",\"card_position\":58,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67cc62cf-c4b2-4c19-b677-990e453d1df6-retina-large.jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67cc62cf-c4b2-4c19-b677-990e453d1df6-retina-large.jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/a59d0af1-df83-430e-94cb-efd8dc0d90fb.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T01:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"0\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"0.0\",\"store_display_asap_time\":\"32 min\",\"store_distance_in_miles\":3.6834675704005932,\"store_id\":\"33975761\",\"store_latitude\":40.67564,\"store_longitude\":-73.96004,\"store_name\":\"Prospect Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    },
    {
        "id": "row.store:27778304:0",
        "childrenCount": 0,
        "component": {
            "id": "row.store",
            "category": "row",
            "__typename": "FacetV2Component"
        },
        "name": null,
        "text": {
            "title": "Yummy Thai",
            "titleTextAttributes": null,
            "subtitle": null,
            "subtitleTextAttributes": null,
            "accessory": "",
            "accessoryTextAttributes": null,
            "description": "$ • Thai, Chinese",
            "descriptionTextAttributes": null,
            "custom": [
                {
                    "key": "delivery_fee_string",
                    "value": "$0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "eta_display_string",
                    "value": "3.3 mi • 35 min",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "is_retail",
                    "value": "false",
                    "__typename": "FacetV2TextTuple"
                },
                {
                    "key": "modality_display_string",
                    "value": "$​0 delivery fee, first order",
                    "__typename": "FacetV2TextTuple"
                }
            ],
            "__typename": "FacetV2Text"
        },
        "images": {
            "main": null,
            "icon": null,
            "background": null,
            "accessory": {
                "uri": null,
                "videoUri": null,
                "placeholder": null,
                "local": "",
                "style": "ROUNDED",
                "logging": null,
                "events": null,
                "__typename": "FacetV2Image"
            },
            "custom": [],
            "__typename": "FacetV2Images"
        },
        "events": {
            "click": {
                "name": "navigate",
                "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/27778304/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJUaGFpIiwiaXRlbV9pZHMiOlsxMTg1MDUyNzcwNSwxMTg1MDUyNzcyNCwxMTg1MDUyNzc0M10sInNlYXJjaF90ZXJtIjoidGhhaSIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSw0LDEwMDMzMywxNzcsMjg0XX0=&pickup=false\"}",
                "__typename": "FacetV2Action"
            },
            "__typename": "FacetV2Events"
        },
        "style": null,
        "layout": {
            "omitFooter": false,
            "gridSpecs": null,
            "dlsPadding": null,
            "__typename": "FacetV2Layout"
        },
        "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.400000095367432,\"display_num_ratings\":\"(20+)\"},\"savelists\":[],\"store_id\":\"27778304\",\"window_shopping\":{\"border_radius\":{\"value\":\"USAGE_BORDER_RADIUS_MEDIUM\"},\"cards\":[],\"cover\":{\"border_radius\":\"USAGE_BORDER_RADIUS_MEDIUM\",\"id\":\"418e9834-c3f0-4f8f-b0e7-bef03856b7ea\",\"image\":{\"remote\":{\"uri\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9150aeac-36bb-4a3f-85a4-0d06ff939fca-retina-large-jpeg\"}}}}}",
        "logging": "{\"asap_available\":true,\"asap_time\":35,\"badges\":\"\",\"business_id\":\"114556\",\"business_vertical_id\":\"0\",\"card_position\":59,\"consumer_id\":\"\",\"container\":\"list\",\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee, first order\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9150aeac-36bb-4a3f-85a4-0d06ff939fca-retina-large-jpeg\",\"express_eta_shown\":false,\"filters_applied\":\"cuisine\",\"final_delivery_fee_line_str\":\"$​0 delivery fee, first order\",\"first_popular_item_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9150aeac-36bb-4a3f-85a4-0d06ff939fca-retina-large-jpeg\",\"has_offer_badges\":false,\"header_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/30a065fe-bd88-42aa-95e5-3885f8484e59.jpeg\",\"is_cross_vertical\":true,\"is_item_carousel_shown\":true,\"is_sponsored\":false,\"list_filter\":\"cuisine:Thai\",\"minimum_subtotal_amount\":0,\"next_close_time\":\"2025-06-13T02:10:00Z\",\"next_open_time\":\"2025-06-13T00:41:53Z\",\"num_item\":3,\"num_star_rating\":\"20\",\"page\":\"explore_page\",\"pickup_available\":true,\"price_range\":1,\"query\":\"Thai\",\"request_id\":\"75a068c4-01d0-4a91-8843-4bd87196c2a5\",\"savelist_store_link_ids\":\"\",\"schedule_delivery_available\":false,\"search_term\":\"thai\",\"shows_dashpass_badging\":true,\"spell_corrected_query\":\"thai\",\"star_rating\":\"4.4\",\"store_display_asap_time\":\"35 min\",\"store_distance_in_miles\":3.2680564989584746,\"store_id\":\"27778304\",\"store_latitude\":40.676105,\"store_longitude\":-73.971596,\"store_name\":\"Yummy Thai\",\"store_predictor_model_ids\":[],\"store_predictor_names\":[],\"store_primary_vertical_id\":\"1\",\"store_primary_vertical_ids\":\"1,4,100333,177,284\",\"submarket_id\":\"8\",\"tab\":\"food\"}",
        "__typename": "FacetV2",
        "childrenMap": []
    }
];
const RestaurantCard = (resData) =>{
    
    let customData = JSON.parse(resData.resData.custom);
    let imgSrc = customData?.window_shopping?.cover?.image?.remote?.uri ?? "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/78e952f2-250e-471d-8a05-24ca784ac46c.png";
    let name = resData.resData.text?.title ?? "Hello";
    return (
        <div className="res-card">
            <img className="res-img" src = {imgSrc}/>
            <h4>{name}</h4>
            <h4>There</h4>
            <h4>38 minutes</h4>
            <h4>4.4 stars</h4>
        </div>
    )
}
const RestaurantContainer = () =>
{
    return (
    <div className="res-container">
    {
        resObj.map((restaurant) => 
            <RestaurantCard key = {restaurant.id} resData = {restaurant}/>
        )
    }
    </div>
    )
};
const Body = () => {
    return (<div className="bodyCode">
            <HeadingComponent/>
            <RestaurantContainer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);


