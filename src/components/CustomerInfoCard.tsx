import { LucideUser } from "lucide-react";
import type { IUser } from "../types";
import InputField from "./InputField";

interface Iprop {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

function CustomerInfoCard({ user, setUser }: Iprop) {
    const handleChange = (
        field: keyof IUser,
        value: string
    ) => {
        setUser((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div className="grid items-start gap-1.5 px-6">
                <div className="leading-none font-semibold flex items-center gap-2">
                    <LucideUser />
                    Customer Information
                </div>
            </div>

            <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Name"
                    id="customerName"
                    value={user.name}
                    onChange={(val) => handleChange("name", val)}
                    placeholder="John Doe"
                />
                <InputField
                    label="Company"
                    id="customerCompany"
                    value={user.company}
                    onChange={(val) => handleChange("company", val)}
                    placeholder="Acme Corp."
                />
                <InputField
                    label="Email"
                    id="customerEmail"
                    type="email"
                    value={user.email}
                    onChange={(val) => handleChange("email", val)}
                    placeholder="john.doe@example.com"
                />
                <InputField
                    label="Phone Number"
                    id="customerPhone"
                    type="tel"
                    value={user.number}
                    onChange={(val) => handleChange("number", val)}
                    placeholder="555-123-4567"
                />
                <InputField
                    label="Zip Code"
                    id="customerZipCode"
                    value={user.pin}
                    onChange={(val) => handleChange("pin", val)}
                    placeholder="90210"
                />
                <InputField
                    label="Shipping Address"
                    id="shippingAddress"
                    value={user.address}
                    onChange={(val) => handleChange("address", val)}
                    placeholder="123 Main St, Anytown, USA"
                />
                <InputField
                    label="Delivery Deadline"
                    id="deliveryDeadline"
                    type="date"
                    value={user.deadliine}
                    onChange={(val) => handleChange("deadliine", val)}
                />
            </div>
        </div>
    );
}

export default CustomerInfoCard;
