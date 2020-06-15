<?php
class ControllerExtensionModuleHomeContact extends Controller
{

    private $error = array();

    // Add New Post by defining it here
    private $posts = array(
        'firstname'        =>    '',
        'lastname'        =>    '',
        'subject'    =>    '',
        'email'        =>    '',
        'telephone'    =>    '',
        'enquiry'    =>    ''    // This will always be the last and large box
    );

    // Add your post value to ignore in the email body content
    private $disallow_in_message_body = array(
        'var_abc_name'
    );

    public function populateDefaultValue()
    {
        $this->posts['firstname']        = $this->customer->getFirstName();
        $this->posts['lastname']        = $this->customer->getLastName();
        $this->posts['email']        = $this->customer->getEmail();
        $this->posts['telephone']    = $this->customer->getTelephone();
    }

    public function index($setting)
    {

        $this->load->language('extension/module/home_contact');

        $data = array();

        // Populate values after customer logged in
        if ($this->customer->isLogged()) {
            $this->populateDefaultValue();
        }

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {

            $mail = new Mail();
            $mail->protocol = $this->config->get('config_mail_protocol');
            $mail->parameter = $this->config->get('config_mail_parameter');
            $mail->smtp_hostname = $this->config->get('config_mail_smtp_hostname');
            $mail->smtp_username = $this->config->get('config_mail_smtp_username');
            $mail->smtp_password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8');
            $mail->smtp_port = $this->config->get('config_mail_smtp_port');
            $mail->smtp_timeout = $this->config->get('config_mail_smtp_timeout');

            $mail->setTo($this->config->get('config_email'));
            //$mail->setFrom($this->request->post['email']);
            $mail->setFrom($this->config->get('config_email'));

            $mail->setSender(html_entity_decode($this->request->post['name'], ENT_QUOTES, 'UTF-8'));
            $mail->setSubject(html_entity_decode(sprintf($this->language->get('email_subject'), $this->request->post['name']), ENT_QUOTES, 'UTF-8'));

            $message = "";

            foreach ($this->posts as $post_var => $post_default_value) {
                if (!in_array($post_var, $this->disallow_in_message_body)) {
                    $message .= $this->language->get('entry_' . $post_var) . ":\n";
                    //$message .= $this->request->post[$post_var]??"";
                    $message .= $this->request->post[$post_var] ? $this->request->post[$post_var] : "";
                    $message .= "\n\n";
                }
            }

            $mail->setText($message);
            // $mail->send();

            // Pro email Template Mod
            if ($this->config->get('pro_email_template_status')) {

                $this->load->model('tool/pro_email');

                $email_params = array(
                    'type' => 'admin.information.contact',
                    'mail' => $mail,
                    'reply_to' => $this->request->post['email'],
                    'data' => array(
                        'enquiry_subject' => html_entity_decode($this->language->get('heading_title') . ' - ' . $this->request->post['subject'], ENT_QUOTES, 'UTF-8'),
                        'enquiry_telephone' => html_entity_decode($this->request->post['telephone'], ENT_QUOTES, 'UTF-8'),
                        'enquiry_name' => html_entity_decode($this->request->post['name'], ENT_QUOTES, 'UTF-8'),
                        'enquiry_mail' => html_entity_decode($this->request->post['email'], ENT_QUOTES, 'UTF-8'),
                        'enquiry_message' => html_entity_decode($this->request->post['enquiry'], ENT_QUOTES, 'UTF-8'),
                        // 'enquiry_message' => html_entity_decode($message, ENT_QUOTES, 'UTF-8'),
                    ),
                );

                $this->model_tool_pro_email->generate($email_params);
            } else {
                $mail->send();
            }

            $this->response->redirect($this->url->link('information/contact/success'));
        } else {
            if (($this->request->server['REQUEST_METHOD'] == 'POST') && !$this->validate()) {
                $data['error'] = true;
            }
        }

        $data['action'] = $this->url->link('information/information', 'information_id=4', true);

        $data['text_btn_submit'] = $this->language->get('text_btn_submit');

        // Captcha
        $data['captcha'] = '';
        /*if ($this->config->get($this->config->get('config_captcha') . '_status') && in_array('contact', (array)$this->config->get('config_captcha_page'))) {
			$data['captcha'] = $this->load->controller('extension/captcha/' . $this->config->get('config_captcha'), $this->error);
		}*/

        if ($this->config->get('google_captcha_v3_status')) {
            $data['captcha'] = $this->load->controller('extension/captcha/google_captcha_v3', $this->error);
        }

        foreach ($this->posts as $post_var => $post_default_value) {
            $data[$post_var] = $post_default_value;
            $data['error_' . $post_var] = '';

            // Label Value
            $data['entry_' . $post_var] = $this->language->get('entry_' . $post_var);

            // Post Value
            if (isset($this->request->post[$post_var])) {
                $data[$post_var] = $this->request->post[$post_var];
            }

            // Error Value
            if (isset($this->error[$post_var])) {
                $data['error_' . $post_var] = $this->error[$post_var];
            }
        }

        $this->load->library('modulehelper');
        $modulehelper = Modulehelper::get_instance($this->registry);

        $oc = $this;
        $language_id = $this->config->get('config_language_id');
        $modulename = "miscellaneous_module";

        $data['subjects'] = $modulehelper->get_field($oc, $modulename, $language_id, 'maintenance_subject');

        $data['title'] = $modulehelper->get_field($oc, $modulename, $language_id, 'title');
        $data['description'] = $modulehelper->get_field($oc, $modulename, $language_id, 'description');
        
        $oc1 = $this;
        $modulename1 = "contact_location";

        $data['text_form_title'] = $this->language->get('text_form_title');
        $data['store'] = $this->config->get('config_name');
        $data['address'] = nl2br($this->config->get('config_address'));
        $data['store_telephone'] = $this->config->get('config_telephone');
        $data['fax'] = $this->config->get('config_fax');
        $data['header_title'] = $modulehelper->get_field($oc1, $modulename1, $language_id, 'header_title');
        $data['top_contents_background_image'] = $modulehelper->get_field($oc1, $modulename1, $language_id, 'top_contents_background_image');
        $data['text_telephone'] = $this->language->get('text_telephone');
        $data['text_fax'] = $this->language->get('text_fax');
        $data['text_email'] = $this->language->get('text_email');
        $data['gmap_iframe'] = html($this->config->get('config_gmap_iframe'));
        $data['config_email'] = html($this->config->get('config_email'));
        
        return $this->load->view('extension/module/home_contact', $data);
    }

    protected function validate()
    {
        if ((utf8_strlen($this->request->post['firstname']) < 3) || (utf8_strlen($this->request->post['firstname']) > 32)) {
            $this->error['firstname'] = $this->language->get('error_firstname');
        }

        if ((utf8_strlen($this->request->post['lastname']) < 3) || (utf8_strlen($this->request->post['lastname']) > 32)) {
            $this->error['lastname'] = $this->language->get('error_lastname');
        }
        if (!$this->request->post['subject']) {
            $this->error['subject'] = $this->language->get('error_subject');
        }

        if ((int) $this->request->post['telephone'] < 1) {
            $this->error['telephone'] = $this->language->get('error_telephone');
        }

        if (!filter_var($this->request->post['email'], FILTER_VALIDATE_EMAIL)) {
            $this->error['email'] = $this->language->get('error_email');
        }

        if ((utf8_strlen($this->request->post['enquiry']) < 10) || (utf8_strlen($this->request->post['enquiry']) > 3000)) {
            $this->error['enquiry'] = $this->language->get('error_enquiry');
        }

        // Captcha
        /*if ($this->config->get($this->config->get('config_captcha') . '_status') && in_array('contact', (array)$this->config->get('config_captcha_page'))) {
			$captcha = $this->load->controller('extension/captcha/' . $this->config->get('config_captcha') . '/validate');
			
			if ($captcha) {
				$this->error['captcha'] = $captcha;
			}
		}*/

        if ($this->config->get('google_captcha_v3_status')) {
            $captcha = $this->load->controller('extension/captcha/google_captcha_v3/validate');

            if ($captcha) {
                $this->error['captcha'] = $captcha;
            }
        }

        return !$this->error;
    }
}
