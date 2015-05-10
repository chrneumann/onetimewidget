// This file is part of One Time Widget, a CKEditor widget plugin.
// Copyright 2015 Christian Neumann <c@2foo.net>
//
// One Time Widget is free software: you can redistribute it and/or
// modify it under the terms of the GNU Affero General Public License
// as published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.
//
// One Time Widget is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with One Time Widget.  If not, see <http://www.gnu.org/licenses/>.

CKEDITOR.plugins.add('onetimewidget', {
  requires: 'widget',
  icons: 'onetimewidget',
  init: function(editor) {
    CKEDITOR.dialog.add(
      'onetimewidget', this.path + '/dialogs/onetimewidget.js');
    editor.widgets.add('onetimewidget', {
      toolbar: null,
      dialog: 'onetimewidget',
      button: 'Create a One Time Widget',
      template: '<div class="onetimewidget"></div>',
      allowedContent: 'div[*]{*}(!onetimewidget,*); div[*]{*}(!onetimewidget__full,*)',
      requiredContent: 'div(onetimewidget)',
      editables: {
        full: {
          selector: '.onetimewidget__full',
        }
      },
      upcast: function(element) {
        return element.name == 'div' && element.hasClass('onetimewidget');
      },
      init: function() {
        var content = this.element.getHtml();
        console.log(this.element);
        console.log(content);
        this.setData('source', content);
      },
      data: function() {
        this.element.setHtml(this.data.source);
      },
    });
  }
});
