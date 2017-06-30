var resizeMixin={
    componentWillMount:function(){

        var _self=this;

        YUI().use('event', function(Y) {
        Y.on('windowresize', function() {
         _self.updateSize();
        });
        });


        // $(window).on('resize', function(e) {
        //     _self.updateSize();
        // });

        this.setState({width:this.props.width});

    },
    componentDidMount: function() {
        this.updateSize();
    },
    componentWillUnmount:function(){

        // $(window).off('resize');

            YUI().use('event', function(Y) {
            Y.on('windowresize', function() {
             _self.updateSize();
            }).detach();
            });
    },

    updateSize:function(){
        var node = ReactDOM.findDOMNode(this);
        var parentWidth=node.offsetWidth;

        if(parentWidth<this.props.width){
            this.setState({width:parentWidth-20});
        }else{
            this.setState({width:this.props.width});
        }
    }
};

window.resizeMixin=resizeMixin;