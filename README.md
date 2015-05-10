One Time Widget (CKEditor widget plugin)
========================================

This is an experimental and very simple plugin for CKEditor. It allows
to add arbitrary HTML to your content which will be represented by an
editor widget. Only elements which are marked using special CSS
classes may be edited by the user.

It's another solution to the problem that you want to create complex
layouts which could get damaged by users editing the content. It's
like marking some elements as "contenteditable", but is more powerful
and user friendly as it uses CKEditor's widget features.

Example:

```html
<div class="onetimewidget">
  <div class="onetimewidget__full fancy-box">
     <p>May be edited by the user</p>
  </div>
  <div class="warning">
    <div class="onetimewidget__full">
      <p>May be edited by the user</p>
    </div>
  </div>
</div>

```

`onetimewidget` is the widget's main class. `onetimewidget__full` is
an element which can be edited by the user.

Installation
------------

```javascript
CKEDITOR.plugins.addExternal('onetimewidget', '/lib/onetimewidget/', 'plugin.js' );
CKEDITOR.replace(elementId, {
  extraPlugins: 'onetimewidget',
});

Ideas
-----

* Add more restrictive classes, for example `onetimewidget__basic`
  which only allows basic formatting.
  
Issues
------

* The widget dialog is somewhat broken. It also could need some
  information about classes and possible buttons to insert classes.