import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, SendIcon, Twitter } from "lucide-react"
import { Form, Input, Button } from "antd";

const ContactSection = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
        // Handle form submission here
        // You can add your API call or email service integration
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30 contact-section"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Email</h4>
                                    <a href="m" className="text-muted-foreground hover:text-primary transition-colors">
                                        hello@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Phone</h4>
                                    <a href="tel: +914444444444" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 XXXXXXXX59
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Mumbai, Maharashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send Me Message</h3>

                        <Form
                            form={form}
                            name="contact-form"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                            className="space-y-6"
                        >
                            <Form.Item
                                label="Your Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name!',
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder="Rohan Kumar...."
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Your Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email!',
                                    },
                                ]}
                            >
                                <Input 
                                    type="email"
                                    placeholder="John@gmail.com"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Your Message"
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your message!',
                                    },
                                ]}
                            >
                                <Input.TextArea 
                                    placeholder="Hello, I'd like to talk about..."
                                    rows={4}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    // type="primary" 
                                    htmlType="submit" 
                                    size="large"
                                    className="w-full flex items-center justify-center gap-2 primary-button"
                                    icon={<SendIcon size={16} />}
                                >
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
