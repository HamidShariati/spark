import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * StartEvent class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            type: "startEvent",
            bounds: {
                x: null,
                y: null,
                width: 40,
                height: 40
            }

        }
        this.config(options)
        this.configBounds(options.bounds)
    }

    config(options) {
        this.options = Object.assign({}, this.options, options);
        return this;
    }

    /**
     * Render the StartEvent Based in options config
     */
    render() {
        this.shape = new JointElements.StartEvent()
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.addTo(this.graph)
    }
}
