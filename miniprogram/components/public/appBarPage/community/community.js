"use strict";
Component({
    properties: {
        myProperty: {
            type: String,
            value: '',
            observer: function () { }
        },
    },
    data: {
        test: 1
    },
    methods: {},
    created: function () {
    },
    attached: function () {
    },
    ready: function () {
        var _this = this;
        setTimeout(function () {
            _this.setData({
                test: 2
            });
        }, 2000);
    },
    moved: function () {
    },
    detached: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbXVuaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixVQUFVLEVBQUM7WUFDUCxJQUFJLEVBQUMsTUFBTTtZQUNYLEtBQUssRUFBQyxFQUFFO1lBQ1IsUUFBUSxFQUFFLGNBQVcsQ0FBQztTQUN6QjtLQUVKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLENBQUM7S0FDVjtJQUNELE9BQU8sRUFBRSxFQUVSO0lBQ0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxLQUFLLEVBQUU7UUFBQSxpQkFNTjtRQUxHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLENBQUM7YUFDVixDQUFDLENBQUE7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsS0FBSyxFQUFFO0lBRVAsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBAYXV0aG9yICB6aGFuZ2xpamllICBcbiAqICBAdmVyc2lvbiAxLjAuMFxuICovXG4vL0NvbXBvbmVudCBPYmplY3RcbkNvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBteVByb3BlcnR5OntcbiAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6JycsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24oKXt9XG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgdGVzdDogMVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRlc3Q6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH0sXG4gICAgbW92ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIGRldGFjaGVkOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbn0pOyJdfQ==