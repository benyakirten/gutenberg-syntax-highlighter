<?php
/*
Plugin Name: Benyakir's Syntax Highlighter - Gutenberg Block Editor
Plugin URI: https://github.com/benyakirten/gutenberg-syntax-highlighter
Description: A Gutenberg block that will highlight syntax in several programming languages 
Version: 1.0.2
Author: Benyakir Horowitz
Author URI: https://www.benyakir-writes.com
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BenyakirsSyntaxHighlighter {
    function __construct() {
        add_action('init', array($this, 'admin_assets'));
    }

    function admin_assets() {
        wp_register_style('editor-benyakir-syntax-highlighter-style', plugin_dir_url(__FILE__) . 'build/block.css');
        wp_register_script('editor-benyakir-syntax-highlighter-script', plugin_dir_url(__FILE__) . 'build/block.js', array('wp-blocks', 'wp-element', 'wp-editor'));
        // This is how the block will be rendered: uses regular HTML, not React
        register_block_type('benyakirsplugins/syntax-highlighter', array(
            'editor_script' => 'editor-benyakir-syntax-highlighter-script',
            'editor_style' => 'editor-benyakir-syntax-highlighter-style',
            'render_callback' => array($this, 'render_html')
        ));
    }

    function render_html($attrs) {
        // Loads only on the front end if the block is there
        if (!is_admin()) {
            wp_enqueue_script('frontend-benyakir-syntax-highlighter-script', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
            wp_enqueue_style('frontend-benyakir-syntax-highlighter-style', plugin_dir_url(__FILE__) . 'build/frontend.css');
        }
        ob_start();
    ?>
        <div class="benyakir-syntax-highlighter">
            <pre style="display: none;"><?php echo wp_json_encode($attrs); ?></pre>
        </div>
    <?php
        return ob_get_clean();
    }
}

$benyakirs_syntax_highlighter = new BenyakirsSyntaxHighlighter();