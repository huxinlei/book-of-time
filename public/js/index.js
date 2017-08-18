var tools = {
    lang: function () {
        if ("undefined" !== typeof en) {
            return en.index
        } else if ("undefined" !== typeof zh) {
            return zh.index
        } else {
            return undefined;
        }
    }()
};