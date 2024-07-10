<template>
  <div :id="id"></div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
// 工具栏显示中文
import '@toast-ui/editor/dist/i18n/zh-cn';
import Editor from '@toast-ui/editor';
// Toast UI Editor 配置文件
import defaultOptions from './defaultOptions.js';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

export default {
  name: "MarkdownEditor",
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default() {
        return 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
      }
    },
    options: {
      type: Object,
      default() {
        return defaultOptions;
      }
    },
    mode: {
      type: String,
      default: 'markdown',
    },
    language: {
      type: String,
      required: false,
      default: 'zh-CN',
    }
  },
  data() {
    return {
      editor: null,
    }
  },
  computed: {
    editorOptions() {
      const _options = Object.assign({}, defaultOptions, this.options);
      _options.initialEditType = this.mode;
      _options.language = this.language;
      return _options;
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        el: document.getElementById(this.id),
        ...this.editorOptions,
        // 使用插件
        plugins: [codeSyntaxHighlight, colorSyntax]
      });

      if (this.value) {
        this.editor.setMarkdown(this.value);
      }

      // 上传图片 方法 TODO 暂时不提供图片上传功能
      // this.uploadImg();
    },
    // 获取编辑器 html
    getHtml() {
      return this.editor.getHTML();
    },
    // 获取编辑器 html
    setHtmlData(html) {
      this.editor.setHTML(html)
    },
    // 获取编辑器 Markdown
    getValue() {
      return this.editor.getMarkdown();
    },
    // 获取编辑器 Markdown
    setValue(value) {
      this.editor.setMarkdown(value);
    },
    // 上传图片方法
    uploadImg() {
      this.editor.removeHook('addImageBlobHook');
      this.editor.on('addImageBlobHook', (_file, cb) => {
        console.log('file' + _file)
        // const file = new FormData();
        // file.append('file', _file);
        // const result = upload.uploadImg(file);
        // result.then(({code, msg, url}) => {
        //   if(code === 0){
        //     this.$message.success(msg);
        //     cb(url, file.name)
        //   }
        // })
      })
    }
  }
}
</script>
