# CRM Integration Prompt: Promotional Offers Management

**Objective**: Implement a management module in the CRM to control the top-bar promotional ticker on the ZICA ZIMA portal.

---

### 1. Database Configuration
- **Collection Name**: `promotional_offers`
- **Firestore Schema**:
  ```typescript
  {
    text: string;         // The message to display (e.g., "Flat 20% Off on VFX Courses!")
    active: boolean;      // Toggle to show/hide the offer
    priority: number;     // Higher numbers show first in the rotation (Default: 0)
    createdAt: timestamp; // Auto-generated on creation
    startDate: timestamp; // (Optional) When the offer should start showing
    endDate: timestamp;   // (Optional) When the offer should automatically stop
  }
  ```

### 2. CRM Functional Requirements

#### A. Create New Offer ("Start Offer")
- Form Fields: 
  - `Text` (Required)
  - `Priority` (Number, default 0)
  - `Active` (Checkbox, default checked)
  - `Date Range` (Optional: Start & End Date)
- Action: Create a new document in `promotional_offers`.

#### B. Edit Offer
- Action: Update any field of an existing document.
- Use Case: Fix typos or change the priority of a running offer.

#### C. Stop Offer (Toggle)
- Action: Set `active` to `false`.
- Result: The offer is immediately removed from the website ticker but remains in the CRM for future re-activation.

#### D. Delete Offer
- Action: Hard delete the document from Firestore.
- Use Case: Cleanup of old, irrelevant offers.

### 3. Implementation Logic
- **Query Logic**: The website fetches offers where `active == true`, sorted by `priority DESC` and `createdAt DESC`.
- **Date Handling**: The website also checks `startDate` and `endDate`. If the current time is outside this range, the offer is hidden even if `active` is true.

---

### Suggested UI Layout for CRM:
- **List View**: A table showing all offers with columns: `Message`, `Status` (Active/Inactive), `Priority`, `Start/End Date`.
- **Quick Toggles**: An "Active" toggle switch directly in the list view for fast Start/Stop.
- **Add Button**: A "New Promotional Offer" floating action button.
