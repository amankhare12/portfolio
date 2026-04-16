import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, SendIcon, Twitter } from "lucide-react"
import { Form, Input, Button } from "antd";
import { useLanguage } from "../context/languageContext";

const ContactSection = () => {
    const [form] = Form.useForm();
    const { language } = useLanguage();

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
                    {language === "en" ? "Get In" : "संपर्क"} <span className="text-primary">{language === "en" ? " Touch" : " करें"}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {language === "en"
                        ? "Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new opportunities."
                        : "क्या आपके पास कोई project idea है या collaboration करना चाहते हैं? बेझिझक संपर्क करें। मैं नए अवसरों पर चर्चा के लिए हमेशा तैयार हूं।"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">{language === "en" ? "Email" : "ईमेल"}</h4>
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
                                    <h4 className="font-medium text-left">{language === "en" ? "Phone" : "फोन"}</h4>
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
                                    <h4 className="font-medium text-left">{language === "en" ? "Location" : "लोकेशन"}</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Mumbai, Maharashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">{language === "en" ? "Connect With Me" : "मुझसे जुड़ें"}</h4>
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
                        <h3 className="text-2xl font-semibold mb-6">{language === "en" ? "Send Me Message" : "मुझे संदेश भेजें"}</h3>

                        <Form
                            form={form}
                            name="contact-form"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                            className="space-y-6"
                        >
                            <Form.Item
                                label={language === "en" ? "Your Name" : "आपका नाम"}
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: language === "en" ? "Please enter your name!" : "कृपया अपना नाम दर्ज करें!",
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder={language === "en" ? "Rohan Kumar...." : "रोहन कुमार...."}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label={language === "en" ? "Your Email" : "आपका ईमेल"}
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: language === "en" ? "Please enter your email!" : "कृपया अपना ईमेल दर्ज करें!",
                                    },
                                    {
                                        type: 'email',
                                        message: language === "en" ? "Please enter a valid email!" : "कृपया सही ईमेल दर्ज करें!",
                                    },
                                ]}
                            >
                                <Input 
                                    type="email"
                                    placeholder={language === "en" ? "John@gmail.com" : "example@gmail.com"}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label={language === "en" ? "Your Message" : "आपका संदेश"}
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: language === "en" ? "Please enter your message!" : "कृपया अपना संदेश लिखें!",
                                    },
                                ]}
                            >
                                <Input.TextArea 
                                    placeholder={language === "en" ? "Hello, I'd like to talk about..." : "नमस्ते, मैं बात करना चाहता/चाहती हूं..."}
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
                                    {language === "en" ? "Send Message" : "संदेश भेजें"}
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
