<?php
class ControllerExtensionModuleProductTabs extends Controller {
	public function index() {
        // Do note that below are the sample for using module helper, you may use it in other modules

		$array = array(
            'oc' => $this,
            'heading_title' => 'Product Tabs',
            'modulename' => 'product_tabs',
            'auto_increment' => true, // for auto increment number
            'fields' => array(
                array('type' => 'text', 'label' => 'Header Title', 'name' => 'header_title'),
                array('type' => 'textarea', 'label' => 'Header Contents', 'name' => 'header_contents','ckeditor'=>true),
                array('type' => 'repeater', 'label' => 'Tabs', 'name' => 'tab_items',
                    'fields' => array(
                        array('type' => 'text', 'label' => 'ID', 'name' => 'id', 'readonly' => true), // for auto increment number
                        array('type' => 'text', 'label' => 'Title', 'name' => 'title'),
                        array('type' => 'text', 'label' => 'URL Link ID', 'name' => 'link'),
                    )
                ),
            ),
        );

        $this->modulehelper->init($array);    
	}
}
