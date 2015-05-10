CKEDITOR.dialog.add('onetimewidget', function(editor) {
  return {
    title: 'Edit One Time Widget',
    minWidth: 600,
    minHeight: 500,
    contents: [
      {
        id: 'source',
        elements: [
          {
            id: 'source',
            type: 'textarea',
            label: 'HTML',            
            rows: 30,
            setup: function(widget) {
              this.setValue(widget.data.source);
            },
            commit: function(widget) {
              widget.setData('source', this.getValue());
            },
          },
        ],
      },
    ],
  };
});
