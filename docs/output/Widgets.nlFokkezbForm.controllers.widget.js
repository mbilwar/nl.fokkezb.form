Ext.data.JsonP.Widgets_nlFokkezbForm_controllers_widget({"tagname":"class","name":"Widgets.nlFokkezbForm.controllers.widget","autodetected":{},"files":[{"filename":"widget.js","href":"widget.html#Widgets-nlFokkezbForm-controllers-widget"}],"members":[{"name":"fieldCtrls","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"property-fieldCtrls","meta":{"private":true}},{"name":"Controller","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-Controller","meta":{}},{"name":"getValues","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-getValues","meta":{}},{"name":"init","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-init","meta":{}},{"name":"render","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-render","meta":{"private":true}},{"name":"setValues","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-setValues","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widgets.nlFokkezbForm.controllers.widget","short_doc":"Main controller of the widget\n\nAlloy.createWidget('nl.fokkezb.form', {\n  fieldsets: [{\n    legend: L('form_common_gen...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget' target='_blank'>widget.js</a></div></pre><div class='doc-contents'><p>Main controller of the widget</p>\n\n<pre class='inline-example '><code>Alloy.createWidget('nl.fokkezb.form', {\n  fieldsets: [{\n    legend: L('form_common_general'),\n    fields: [{\n      name: 'code',\n      label: L('form_common_code'),\n      type: 'text'\n    }, {\n      name: 'employeeNumber',\n      label: L('form_resource_employeeNumber'),\n      type: 'text'\n    }, {\n      name: 'firstNames',\n      label: L('form_resource_firstNames'),\n      type: 'text'\n    }, {\n      name: 'lastName',\n      label: L('form_resource_lastName'),\n      type: 'text'\n    }]\n  }]\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldCtrls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-property-fieldCtrls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-property-fieldCtrls' class='name expandable'>fieldCtrls</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>References to all field controllers by name. ...</div><div class='long'><p>References to all field controllers by name.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-Controller' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-method-Controller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-Controller' class='name expandable'>Controller</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor for the form. ...</div><div class='long'><p>Constructor for the form.</p>\n\n<p>Automatically calls <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> if it has <code>args.fieldsets</code> or <code>args.fields</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments passed to the controller.</p>\n<ul><li><span class='pre'>config</span> : String (optional)<div class='sub-desc'><p>Path of a CommonJS or JSON file to extend <code>args</code> with.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-getValues' class='name expandable'>getValues</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get all field values. ...</div><div class='long'><p>Get all field values.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Values as object with field names as keys.</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init' class='name expandable'>init</a>( <span class='pre'>opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize the form. ...</div><div class='long'><p>Initialize the form.</p>\n\n<p>Called automatically by <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-Controller\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-Controller\" class=\"docClass\">Controller</a> if it has <code>args.fieldsets</code> or <code>args.fields</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opts</span> : Object<div class='sub-desc'><p>Options. Either <code>opts.fieldsets</code> or <code>opts.fields</code> is required.</p>\n<ul><li><span class='pre'>fieldsets</span> : Object[] (optional)<div class='sub-desc'><p>Array of fieldsets.</p>\n</div></li><li><span class='pre'>fields</span> : Object[] (optional)<div class='sub-desc'><p>Array of fields.</p>\n</div></li><li><span class='pre'>values</span> : Object (optional)<div class='sub-desc'><p>Values as object with field names as keys.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>If the required options are missing.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-render' class='name expandable'>render</a>( <span class='pre'>fieldsets, values</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Renders the form. ...</div><div class='long'><p>Renders the form.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldsets</span> : Object[]<div class='sub-desc'><p>Array of fieldset Objects</p>\n</div></li><li><span class='pre'>values</span> : Object<div class='sub-desc'><p>Object containing values</p>\n</div></li></ul></div></div></div><div id='method-setValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbForm-controllers-widget-method-setValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-setValues' class='name expandable'>setValues</a>( <span class='pre'>Values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set field values. ...</div><div class='long'><p>Set field values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Values</span> : Object<div class='sub-desc'><p>as object with field names as keys.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});