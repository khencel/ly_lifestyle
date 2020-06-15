<?php
class ControllerExtensionModuleProductTabs extends Controller {

	public function index($setting) {

		$data = array();

		$this->load->library('modulehelper');
		$modulehelper = Modulehelper::get_instance($this->registry);

		$oc = $this;
		$language_id = $this->config->get('config_language_id');
		$modulename = "product_tabs";

		$data['header_title'] = $modulehelper->get_field($oc, $modulename, $language_id, 'header_title');
		$data['header_contents'] = $modulehelper->get_field($oc, $modulename, $language_id, 'header_contents');
		$data['tab_items'] = $modulehelper->get_field($oc, $modulename, $language_id, 'tab_items');

		$this->load->model('catalog/information');

		$information_id = 0;

		if (isset($this->request->get['route'])) {
			if (isset($this->request->get['information_id'])) {
				$information_id = (int)$this->request->get['information_id'];
			}
		}

		foreach($data['tab_items'] as $key => $tab){

			// $data['tab_items'][$key]['link'] = $this->url->link('information/information', 'information_id=' . $tab['link']);
			$data['tab_items'][$key]['link'] = $this->url->link('information/information', 'information_id=' . $tab['link']);

			if($information_id == $tab['link']){
				$data['tab_items'][$key]['active'] = true;
			}
			else{
				$data['tab_items'][$key]['active'] = false;
			}
		}
		//debug($data['tab_items']);

		return $this->load->view('extension/module/product_tabs', $data);
	}
}