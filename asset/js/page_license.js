// Responsive License Page JavaScript with Creative Features
class LicenseManager {
  constructor() {
    this.licenses = [];
    this.filteredLicenses = [];
    this.currentPage = 1;
    this.perPage = 50;
    this.sortField = "license";
    this.sortDirection = "asc";
    this.filters = {};
    this.isMobileView = false;

    this.init();
  }

  init() {
    // Initialize Lucide icons
    if (typeof lucide === "undefined") {
      window.lucide = lucide;
    }

    this.loadSampleData();
    this.initializeEventListeners();
    this.initializeResponsive();
    this.renderLicenses();
    this.updateStats();
    this.initializeCharts();

    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    this.showNotification(
      "License management system loaded successfully",
      "success"
    );
  }

  loadSampleData() {
    // Sample license data with more variety
    this.licenses = [
      {
        id: "0000067169",
        key: "0000067169-SHUIW-RYPVF-WDFJ9-9T90L",
        owner: "user sukma",
        email: "user.sukma@example.com",
        product: "otomasiCS integrasi woowa",
        type: "premium",
        status: "active",
        issueDate: "2024-01-15",
        expiryDate: "2025-01-15",
        maxDevices: 5,
        activeDevices: 3,
        totalActivations: 12,
        lastUsed: 2,
        violations: 0,
        price: 299.99,
      },
      {
        id: "0000067158",
        key: "0000067158-QJVSN-REPTO-6TEIQ-MSFCS",
        owner: "sukma1testing",
        email: "sukma1testing@example.com",
        product: "otomasiCS integrasi woowa",
        type: "regular",
        status: "active",
        issueDate: "2024-02-20",
        expiryDate: "2025-02-20",
        maxDevices: 3,
        activeDevices: 2,
        totalActivations: 8,
        lastUsed: 1,
        violations: 0,
        price: 199.99,
      },
      {
        id: "0000067146",
        key: "0000067146-33JTM-F3TOE-OMGDL-9YR25",
        owner: "Devi Indah Pramesti",
        email: "devi.indah@example.com",
        product: "otomasiCS integrasi woowa",
        type: "enterprise",
        status: "active",
        issueDate: "2024-03-10",
        expiryDate: "2025-03-10",
        maxDevices: 10,
        activeDevices: 7,
        totalActivations: 25,
        lastUsed: 0,
        violations: 1,
        price: 599.99,
      },
      {
        id: "0000067126",
        key: "0000067126-BBTUP-MFGWC-TSTZZ-VMQY9",
        owner: "Devi Indah Pramesti",
        email: "devi.indah@example.com",
        product: "Premium Suite",
        type: "trial",
        status: "expired",
        issueDate: "2024-04-01",
        expiryDate: "2024-05-01",
        maxDevices: 1,
        activeDevices: 0,
        totalActivations: 3,
        lastUsed: 30,
        violations: 0,
        price: 0,
      },
      {
        id: "0000067136",
        key: "0000067136-QESCO-EYBK4-ISXDY-JEAWS",
        owner: "adhit",
        email: "adhit@example.com",
        product: "Basic Package",
        type: "regular",
        status: "suspended",
        issueDate: "2024-05-15",
        expiryDate: "2025-05-15",
        maxDevices: 2,
        activeDevices: 0,
        totalActivations: 15,
        lastUsed: 7,
        violations: 3,
        price: 99.99,
      },
    ];

    this.filteredLicenses = [...this.licenses];
  }

  initializeEventListeners() {
    // Checkbox events
    document.getElementById("select-all")?.addEventListener("change", (e) => {
      this.selectAll(e.target.checked);
    });

    // Bulk actions
    document
      .getElementById("update-license-btn")
      ?.addEventListener("click", () => {
        this.performBulkAction();
      });

    // Search
    document.getElementById("search-input")?.addEventListener("input", (e) => {
      this.debounce(() => this.search(e.target.value), 300)();
    });

    // Filter button
    document.getElementById("filter-btn")?.addEventListener("click", () => {
      this.openFilterModal();
    });

    // Refresh button
    document.getElementById("refresh-btn")?.addEventListener("click", () => {
      this.refreshData();
    });

    // Add license button
    document
      .getElementById("add-license-btn")
      ?.addEventListener("click", () => {
        this.openAddLicenseModal();
      });

    // Per page selector
    document
      .getElementById("per-page-select")
      ?.addEventListener("change", (e) => {
        this.perPage = parseInt(e.target.value);
        this.currentPage = 1;
        this.renderLicenses();
      });

    // Mobile view toggle
    document
      .getElementById("mobile-view-toggle")
      ?.addEventListener("change", (e) => {
        this.toggleMobileView(e.target.checked);
      });

    // Sort headers
    document.querySelectorAll("[data-sort]").forEach((header) => {
      header.addEventListener("click", () => {
        this.sort(header.dataset.sort);
      });
    });

    // Analytics button
    document
      .getElementById("license-analytics")
      ?.addEventListener("click", () => {
        this.openAnalyticsModal();
      });

    // Export buttons
    document.getElementById("export-excel")?.addEventListener("click", () => {
      this.exportData("excel");
    });

    document.getElementById("export-csv")?.addEventListener("click", () => {
      this.exportData("csv");
    });

    // Filter modal events
    document
      .getElementById("apply-filters-btn")
      ?.addEventListener("click", () => {
        this.applyFilters();
      });

    document
      .getElementById("clear-filters-btn")
      ?.addEventListener("click", () => {
        this.clearFilters();
      });

    // Add license modal events
    document
      .getElementById("create-license-btn")
      ?.addEventListener("click", () => {
        this.createLicense();
      });

    // License detail modal events
    document.getElementById("copy-key-btn")?.addEventListener("click", () => {
      this.copyLicenseKey();
    });

    document
      .getElementById("extend-license-btn")
      ?.addEventListener("click", () => {
        this.extendLicense();
      });

    document
      .getElementById("suspend-license-btn")
      ?.addEventListener("click", () => {
        this.suspendLicense();
      });

    document
      .getElementById("revoke-license-btn")
      ?.addEventListener("click", () => {
        this.revokeLicense();
      });

    document.getElementById("qr-code-btn")?.addEventListener("click", () => {
      this.generateQRCode();
    });
  }

  initializeResponsive() {
    // Check if mobile view should be enabled by default
    if (window.innerWidth < 1024) {
      document.getElementById("mobile-view-toggle").checked = true;
      this.toggleMobileView(true);
    }

    // Listen for window resize
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  handleResize() {
    if (window.innerWidth < 1024 && !this.isMobileView) {
      document.getElementById("mobile-view-toggle").checked = true;
      this.toggleMobileView(true);
    } else if (window.innerWidth >= 1024 && this.isMobileView) {
      document.getElementById("mobile-view-toggle").checked = false;
      this.toggleMobileView(false);
    }
  }

  toggleMobileView(enabled) {
    this.isMobileView = enabled;
    const desktopTable = document.getElementById("desktop-table");
    const mobileCards = document.getElementById("mobile-cards");

    if (enabled) {
      desktopTable.classList.add("hidden");
      mobileCards.classList.remove("hidden");
      this.renderMobileCards();
    } else {
      desktopTable.classList.remove("hidden");
      mobileCards.classList.add("hidden");
      this.renderDesktopTable();
    }
  }

  renderLicenses() {
    if (this.isMobileView) {
      this.renderMobileCards();
    } else {
      this.renderDesktopTable();
    }
    this.renderPagination();
  }

  renderDesktopTable() {
    const tbody = document.getElementById("license-table-body");
    if (!tbody) return;

    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    const pageData = this.filteredLicenses.slice(startIndex, endIndex);

    tbody.innerHTML = pageData
      .map(
        (license) => `
            <tr class="intro-x">
                <td class="w-10">
                    <input class="form-check-input license-checkbox" type="checkbox" value="${
                      license.id
                    }">
                </td>
                <td class="w-40 !py-4">
                    <a href="#" class="font-medium whitespace-nowrap license-key font-mono" data-id="${
                      license.id
                    }">
                        ${license.key}
                    </a>
                    <div class="text-slate-500 flex mt-0.5 flex-wrap">
                        <span class="license-tag inv-tag">INV ${license.id.slice(
                          -2
                        )}</span>
                        <span class="license-tag product-tag">${
                          license.product
                        }</span>
                    </div>
                </td>
                <td class="w-40">
                    <div class="flex items-center">
                        <div class="w-9 h-9 image-fit zoom-in">
                            <img alt="${
                              license.owner
                            }" class="rounded-full" src="https://ui-avatars.com/api/?name=${encodeURIComponent(
          license.owner
        )}&background=random">
                        </div>
                        <div class="ml-3">
                            <div class="font-medium">${license.owner}</div>
                            <div class="text-slate-500 text-xs">${
                              license.email
                            }</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="text-sm">
                        <div class="font-medium">${this.formatDate(
                          license.expiryDate
                        )}</div>
                        <div class="text-slate-500">${this.getDaysUntilExpiry(
                          license.expiryDate
                        )} days</div>
                    </div>
                </td>
                <td>
                    <div class="flex items-center">
                        <div class="license-card-status status-${
                          license.status
                        }">
                            ${license.status.toUpperCase()}
                        </div>
                    </div>
                </td>
                
            </tr>
        `
      )
      .join("");

    // Add event listeners for action buttons
    this.addActionListeners();

    // Reinitialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  renderMobileCards() {
    const container = document.getElementById("license-cards-container");
    if (!container) return;

    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    const pageData = this.filteredLicenses.slice(startIndex, endIndex);

    container.innerHTML = pageData
      .map(
        (license) => `
            <div class="license-card fade-in">
                <div class="license-card-header">
                    <div class="flex items-center">
                        <input class="form-check-input license-checkbox mr-3" type="checkbox" value="${
                          license.id
                        }">
                        <div class="license-card-key">${license.key}</div>
                    </div>
                    <div class="license-card-status status-${license.status}">
                        ${license.status.toUpperCase()}
                    </div>
                </div>
                
                <div class="license-card-body">
                    <div class="license-card-field">
                        <div class="license-card-label">Owner</div>
                        <div class="license-card-value">${license.owner}</div>
                    </div>
                    <div class="license-card-field">
                        <div class="license-card-label">Product</div>
                        <div class="license-card-value">${license.product}</div>
                    </div>
                    <div class="license-card-field">
                        <div class="license-card-label">Type</div>
                        <div class="license-card-value">${license.type}</div>
                    </div>
                    <div class="license-card-field">
                        <div class="license-card-label">Expires</div>
                        <div class="license-card-value">${this.formatDate(
                          license.expiryDate
                        )}</div>
                    </div>
                    <div class="license-card-field">
                        <div class="license-card-label">Devices</div>
                        <div class="license-card-value">${
                          license.activeDevices
                        }/${license.maxDevices}</div>
                    </div>
                    <div class="license-card-field">
                        <div class="license-card-label">Price</div>
                        <div class="license-card-value">$${license.price}</div>
                    </div>
                </div>
                
                <div class="license-card-actions">
                    <button class="btn btn-primary btn-sm license-view" data-id="${
                      license.id
                    }">
                        <i data-lucide="eye" class="w-4 h-4 mr-1"></i> View
                    </button>
                    <button class="btn btn-secondary btn-sm license-edit" data-id="${
                      license.id
                    }">
                        <i data-lucide="edit" class="w-4 h-4 mr-1"></i> Edit
                    </button>
                    <button class="btn btn-danger btn-sm license-delete" data-id="${
                      license.id
                    }">
                        <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    // Add event listeners for action buttons
    this.addActionListeners();

    // Reinitialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  addActionListeners() {
    // License view buttons
    document.querySelectorAll(".license-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.viewLicense(btn.dataset.id);
      });
    });

    // License edit buttons
    document.querySelectorAll(".license-edit").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.editLicense(btn.dataset.id);
      });
    });

    // License delete buttons
    document.querySelectorAll(".license-delete").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.deleteLicense(btn.dataset.id);
      });
    });

    // License key click (for desktop table)
    document.querySelectorAll(".license-key").forEach((key) => {
      key.addEventListener("click", (e) => {
        e.preventDefault();
        this.viewLicense(key.dataset.id);
      });
    });

    // Individual checkboxes
    document.querySelectorAll(".license-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.updateSelectAllState();
        this.updateBulkActionState();
      });
    });
  }

  renderPagination() {
    const totalPages = Math.ceil(this.filteredLicenses.length / this.perPage);
    const paginationControls = document.getElementById("pagination-controls");

    if (!paginationControls) return;

    let paginationHTML = "";

    // Previous button
    paginationHTML += `
            <li class="page-item ${this.currentPage === 1 ? "disabled" : ""}">
                <a class="page-link" href="#" data-page="${
                  this.currentPage - 1
                }">
                    <i class="w-4 h-4" data-lucide="chevron-left"></i>
                </a>
            </li>
        `;

    // Page numbers
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(totalPages, this.currentPage + 2);

    if (startPage > 1) {
      paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" data-page="1">1</a>
                </li>
            `;
      if (startPage > 2) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `
                <li class="page-item ${i === this.currentPage ? "active" : ""}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
      }
      paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a>
                </li>
            `;
    }

    // Next button
    paginationHTML += `
            <li class="page-item ${
              this.currentPage === totalPages ? "disabled" : ""
            }">
                <a class="page-link" href="#" data-page="${
                  this.currentPage + 1
                }">
                    <i class="w-4 h-4" data-lucide="chevron-right"></i>
                </a>
            </li>
        `;

    paginationControls.innerHTML = paginationHTML;

    // Add pagination event listeners
    paginationControls.querySelectorAll("a[data-page]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = parseInt(link.dataset.page);
        if (page !== this.currentPage && page >= 1 && page <= totalPages) {
          this.currentPage = page;
          this.renderLicenses();
        }
      });
    });

    // Reinitialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  updateStats() {
    const activeCount = this.licenses.filter(
      (l) => l.status === "active"
    ).length;
    const expiringCount = this.licenses.filter((l) => {
      const daysUntilExpiry = this.getDaysUntilExpiry(l.expiryDate);
      return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
    }).length;
    const expiredCount = this.licenses.filter(
      (l) => l.status === "expired"
    ).length;
    const totalRevenue = this.licenses.reduce((sum, l) => sum + l.price, 0);

    document.getElementById("active-count").textContent = activeCount;
    document.getElementById("expiring-count").textContent = expiringCount;
    document.getElementById("expired-count").textContent = expiredCount;
    document.getElementById("revenue-count").textContent = `$${(
      totalRevenue / 1000
    ).toFixed(1)}K`;
  }

  selectAll(checked) {
    document.querySelectorAll(".license-checkbox").forEach((checkbox) => {
      checkbox.checked = checked;
    });
    this.updateBulkActionState();
  }

  updateSelectAllState() {
    const checkboxes = document.querySelectorAll(".license-checkbox");
    const checkedCheckboxes = document.querySelectorAll(
      ".license-checkbox:checked"
    );
    const selectAllCheckbox = document.getElementById("select-all");

    if (checkedCheckboxes.length === 0) {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === checkboxes.length) {
      selectAllCheckbox.checked = true;
      selectAllCheckbox.indeterminate = false;
    } else {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.indeterminate = true;
    }
  }

  updateBulkActionState() {
    const checkedCheckboxes = document.querySelectorAll(
      ".license-checkbox:checked"
    );
    const updateBtn = document.getElementById("update-license-btn");

    if (checkedCheckboxes.length > 0) {
      updateBtn.disabled = false;
      updateBtn.classList.remove("opacity-50");
    } else {
      updateBtn.disabled = true;
      updateBtn.classList.add("opacity-50");
    }
  }

  performBulkAction() {
    const selectedAction = document.getElementById(
      "license-action-select"
    ).value;
    const checkedCheckboxes = document.querySelectorAll(
      ".license-checkbox:checked"
    );

    if (!selectedAction) {
      this.showNotification("Please select an action", "error");
      return;
    }

    if (checkedCheckboxes.length === 0) {
      this.showNotification("Please select at least one license", "error");
      return;
    }

    const selectedIds = Array.from(checkedCheckboxes).map((cb) => cb.value);
    const actionText = this.getActionText(selectedAction);

    if (
      confirm(
        `Are you sure you want to ${actionText.toLowerCase()} ${
          selectedIds.length
        } license(s)?`
      )
    ) {
      this.showNotification(
        `Processing ${selectedIds.length} licenses...`,
        "info"
      );

      setTimeout(() => {
        selectedIds.forEach((id) => {
          const license = this.licenses.find((l) => l.id === id);
          if (license) {
            if (selectedAction === "delete") {
              this.licenses = this.licenses.filter((l) => l.id !== id);
            } else {
              license.status = selectedAction;
            }
          }
        });

        this.filteredLicenses = [...this.licenses];
        this.renderLicenses();
        this.updateStats();
        this.clearSelections();

        this.showNotification(
          `Successfully ${actionText.toLowerCase()}d ${
            selectedIds.length
          } license(s)`,
          "success"
        );
      }, 1000);
    }
  }

  getActionText(action) {
    const actionMap = {
      activate: "Activate",
      deactivate: "Deactivate",
      suspend: "Suspend",
      delete: "Delete",
      extend: "Extend",
    };
    return actionMap[action] || action;
  }

  clearSelections() {
    document.querySelectorAll(".form-check-input").forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.indeterminate = false;
    });
    this.updateBulkActionState();
  }

  search(query) {
    if (!query.trim()) {
      this.filteredLicenses = [...this.licenses];
    } else {
      const searchTerm = query.toLowerCase();
      this.filteredLicenses = this.licenses.filter(
        (license) =>
          license.key.toLowerCase().includes(searchTerm) ||
          license.owner.toLowerCase().includes(searchTerm) ||
          license.email.toLowerCase().includes(searchTerm) ||
          license.product.toLowerCase().includes(searchTerm) ||
          license.status.toLowerCase().includes(searchTerm)
      );
    }

    this.currentPage = 1;
    this.renderLicenses();
  }

  sort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDirection = "asc";
    }

    this.filteredLicenses.sort((a, b) => {
      let aValue = a[field];
      let bValue = b[field];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (this.sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Update sort indicators
    document.querySelectorAll("[data-sort]").forEach((header) => {
      header.classList.remove("sorted-asc", "sorted-desc");
    });

    const currentHeader = document.querySelector(`[data-sort="${field}"]`);
    if (currentHeader) {
      currentHeader.classList.add(`sorted-${this.sortDirection}`);
    }

    this.renderLicenses();
  }

  viewLicense(licenseId) {
    const license = this.licenses.find((l) => l.id === licenseId);
    if (!license) return;

    // Populate modal with license data
    document.getElementById("modal-license-key").value = license.key;
    document.getElementById("modal-owner").value = license.owner;
    document.getElementById("modal-product").value = license.product;
    document.getElementById("modal-type").value = license.type;
    document.getElementById("modal-issue-date").value = this.formatDate(
      license.issueDate
    );
    document.getElementById("modal-expiry-date").value = this.formatDate(
      license.expiryDate
    );

    // Update status badge
    const statusBadge = document.getElementById("modal-status-badge");
    statusBadge.className = `license-card-status status-${license.status}`;
    statusBadge.textContent = license.status.toUpperCase();

    // Update usage statistics
    document.getElementById("total-activations").textContent =
      license.totalActivations;
    document.getElementById("active-devices").textContent =
      license.activeDevices;
    document.getElementById("last-used").textContent = license.lastUsed;
    document.getElementById("violations").textContent = license.violations;

    // Generate QR code
    this.generateQRCodeForLicense(license);

    // Generate activity timeline
    this.generateActivityTimeline(license);

    // Store current license for modal actions
    this.currentLicense = license;

    // Show modal
    const modalElement = document.getElementById("license-detail-modal");
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  generateQRCodeForLicense(license) {
    const qrContainer = document.getElementById("qr-code-container");
    qrContainer.innerHTML = `
            <div class="qr-code-placeholder">
                <i data-lucide="qr-code" class="w-16 h-16 text-slate-400"></i>
                <div class="text-sm text-slate-500 mt-2">QR Code</div>
            </div>
        `;

    // In a real implementation, you would use a QR code library like qrcode.js
    // For demo purposes, we'll show a placeholder
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  generateActivityTimeline(license) {
    const timeline = document.getElementById("activity-timeline");
    const activities = [
      {
        time: "2 hours ago",
        title: "License Activated",
        description: `License activated on device: Windows 10 Desktop`,
        type: "success",
      },
      {
        time: "1 day ago",
        title: "Device Added",
        description: `New device registered: Android Mobile`,
        type: "info",
      },
      {
        time: "3 days ago",
        title: "License Extended",
        description: `License extended for 1 year`,
        type: "warning",
      },
      {
        time: "1 week ago",
        title: "License Created",
        description: `License created and issued to ${license.owner}`,
        type: "primary",
      },
    ];

    timeline.innerHTML = activities
      .map(
        (activity) => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-time">${activity.time}</div>
                    <div class="timeline-title">${activity.title}</div>
                    <div class="timeline-description">${activity.description}</div>
                </div>
            </div>
        `
      )
      .join("");
  }

  copyLicenseKey() {
    const licenseKey = document.getElementById("modal-license-key").value;
    navigator.clipboard.writeText(licenseKey).then(() => {
      this.showNotification("License key copied to clipboard", "success");

      // Add visual feedback
      const copyBtn = document.getElementById("copy-key-btn");
      copyBtn.classList.add("copy-animation");
      setTimeout(() => {
        copyBtn.classList.remove("copy-animation");
      }, 1000);
    });
  }

  extendLicense() {
    if (!this.currentLicense) return;

    if (confirm("Extend this license for 1 year?")) {
      const currentExpiry = new Date(this.currentLicense.expiryDate);
      currentExpiry.setFullYear(currentExpiry.getFullYear() + 1);
      this.currentLicense.expiryDate = currentExpiry
        .toISOString()
        .split("T")[0];

      document.getElementById("modal-expiry-date").value = this.formatDate(
        this.currentLicense.expiryDate
      );

      this.showNotification("License extended successfully", "success");
      this.renderLicenses();
    }
  }

  suspendLicense() {
    if (!this.currentLicense) return;

    if (
      confirm(
        "Suspend this license? The user will not be able to use it until reactivated."
      )
    ) {
      this.currentLicense.status = "suspended";

      const statusBadge = document.getElementById("modal-status-badge");
      statusBadge.className = "license-card-status status-suspended";
      statusBadge.textContent = "SUSPENDED";

      this.showNotification("License suspended successfully", "warning");
      this.renderLicenses();
    }
  }

  revokeLicense() {
    if (!this.currentLicense) return;

    if (
      confirm("Revoke this license permanently? This action cannot be undone.")
    ) {
      this.licenses = this.licenses.filter(
        (l) => l.id !== this.currentLicense.id
      );
      this.filteredLicenses = [...this.licenses];

      // Close modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("license-detail-modal")
      );
      modal.hide();

      this.showNotification("License revoked successfully", "success");
      this.renderLicenses();
      this.updateStats();
    }
  }

  refreshData() {
    this.showNotification("Refreshing license data...", "info");

    // Simulate API call
    setTimeout(() => {
      this.renderLicenses();
      this.updateStats();
      this.showNotification("License data refreshed successfully", "success");
    }, 1000);
  }

  exportData(format) {
    this.showNotification(
      `Exporting data as ${format.toUpperCase()}...`,
      "info"
    );

    // Simulate export process
    setTimeout(() => {
      // In a real implementation, you would generate and download the file
      const data = this.filteredLicenses.map((license) => ({
        "License Key": license.key,
        Owner: license.owner,
        Email: license.email,
        Product: license.product,
        Type: license.type,
        Status: license.status,
        "Issue Date": license.issueDate,
        "Expiry Date": license.expiryDate,
        Price: license.price,
      }));

      console.log(`${format.toUpperCase()} Export Data:`, data);
      this.showNotification(
        `Data exported successfully as ${format.toUpperCase()}`,
        "success"
      );
    }, 2000);
  }

  openFilterModal() {
    const modal = new bootstrap.Modal(document.getElementById("filter-modal"));
    modal.show();
  }

  applyFilters() {
    const statusFilters = Array.from(
      document.querySelectorAll('input[name="status-filter"]:checked')
    ).map((cb) => cb.value);
    const typeFilter = document.getElementById("type-filter").value;
    const productFilter = document.getElementById("product-filter").value;
    const ownerFilter = document
      .getElementById("owner-filter")
      .value.toLowerCase();
    const issueDateFrom = document.getElementById("issue-date-from").value;
    const issueDateTo = document.getElementById("issue-date-to").value;
    const expiryDateFrom = document.getElementById("expiry-date-from").value;
    const expiryDateTo = document.getElementById("expiry-date-to").value;

    this.filteredLicenses = this.licenses.filter((license) => {
      // Status filter
      if (statusFilters.length > 0 && !statusFilters.includes(license.status)) {
        return false;
      }

      // Type filter
      if (typeFilter && license.type !== typeFilter) {
        return false;
      }

      // Product filter
      if (productFilter && license.product !== productFilter) {
        return false;
      }

      // Owner filter
      if (
        ownerFilter &&
        !license.owner.toLowerCase().includes(ownerFilter) &&
        !license.email.toLowerCase().includes(ownerFilter)
      ) {
        return false;
      }

      // Date filters
      if (issueDateFrom && license.issueDate < issueDateFrom) {
        return false;
      }

      if (issueDateTo && license.issueDate > issueDateTo) {
        return false;
      }

      if (expiryDateFrom && license.expiryDate < expiryDateFrom) {
        return false;
      }

      if (expiryDateTo && license.expiryDate > expiryDateTo) {
        return false;
      }

      return true;
    });

    this.currentPage = 1;
    this.renderLicenses();

    // Update filter button to show active state
    const filterBtn = document.getElementById("filter-btn");
    if (this.filteredLicenses.length !== this.licenses.length) {
      filterBtn.classList.add("btn-primary");
      filterBtn.classList.remove("btn-outline-secondary");
    } else {
      filterBtn.classList.remove("btn-primary");
      filterBtn.classList.add("btn-outline-secondary");
    }

    this.showNotification(
      `Showing ${this.filteredLicenses.length} filtered results`,
      "success"
    );

    // Close modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("filter-modal")
    );
    modal.hide();
  }

  clearFilters() {
    // Reset all filter inputs
    document
      .querySelectorAll('input[name="status-filter"]')
      .forEach((cb) => (cb.checked = false));
    document.getElementById("type-filter").value = "";
    document.getElementById("product-filter").value = "";
    document.getElementById("owner-filter").value = "";
    document.getElementById("issue-date-from").value = "";
    document.getElementById("issue-date-to").value = "";
    document.getElementById("expiry-date-from").value = "";
    document.getElementById("expiry-date-to").value = "";

    // Reset filtered data
    this.filteredLicenses = [...this.licenses];
    this.currentPage = 1;
    this.renderLicenses();

    // Reset filter button
    const filterBtn = document.getElementById("filter-btn");
    filterBtn.classList.remove("btn-primary");
    filterBtn.classList.add("btn-outline-secondary");

    this.showNotification("Filters cleared", "info");
  }

  openAddLicenseModal() {
    const modal = new bootstrap.Modal(
      document.getElementById("add-license-modal")
    );
    modal.show();
  }

  createLicense() {
    // Get form data
    const product = document.getElementById("add-product").value;
    const ownerName = document.getElementById("add-owner-name").value;
    const ownerEmail = document.getElementById("add-owner-email").value;
    const licenseType = document.getElementById("add-license-type").value;
    const duration = parseInt(document.getElementById("add-duration").value);
    const durationUnit = document.getElementById("add-duration-unit").value;
    const maxDevices = parseInt(
      document.getElementById("add-max-devices").value
    );
    const price = parseFloat(document.getElementById("add-price").value) || 0;
    const notes = document.getElementById("add-notes").value;
    const autoActivate = document.getElementById("add-auto-activate").checked;

    // Validate required fields
    if (!product || !ownerName || !ownerEmail || !licenseType) {
      this.showNotification("Please fill in all required fields", "error");
      return;
    }

    // Generate license key
    const licenseKey = this.generateLicenseKey();

    // Calculate expiry date
    const issueDate = new Date();
    const expiryDate = new Date(issueDate);

    if (durationUnit === "days") {
      expiryDate.setDate(expiryDate.getDate() + duration);
    } else if (durationUnit === "months") {
      expiryDate.setMonth(expiryDate.getMonth() + duration);
    } else if (durationUnit === "years") {
      expiryDate.setFullYear(expiryDate.getFullYear() + duration);
    }

    // Create new license object
    const newLicense = {
      id: Date.now().toString(),
      key: licenseKey,
      owner: ownerName,
      email: ownerEmail,
      product: product,
      type: licenseType,
      status: autoActivate ? "active" : "pending",
      issueDate: issueDate.toISOString().split("T")[0],
      expiryDate: expiryDate.toISOString().split("T")[0],
      maxDevices: maxDevices,
      activeDevices: 0,
      totalActivations: 0,
      lastUsed: 0,
      violations: 0,
      price: price,
    };

    // Add to licenses array
    this.licenses.unshift(newLicense);
    this.filteredLicenses = [...this.licenses];

    // Reset form
    document
      .getElementById("add-license-modal")
      .querySelectorAll("input, select, textarea")
      .forEach((input) => {
        if (input.type === "checkbox") {
          input.checked = false;
        } else {
          input.value = "";
        }
      });

    // Set default values
    document.getElementById("add-duration").value = "365";
    document.getElementById("add-max-devices").value = "1";

    // Close modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("add-license-modal")
    );
    modal.hide();

    // Refresh display
    this.renderLicenses();
    this.updateStats();

    this.showNotification("License created successfully", "success");
  }

  generateLicenseKey() {
    const segments = [];
    for (let i = 0; i < 5; i++) {
      let segment = "";
      for (let j = 0; j < 5; j++) {
        segment += Math.random().toString(36).toUpperCase().charAt(2);
      }
      segments.push(segment);
    }
    return segments.join("-");
  }

  openAnalyticsModal() {
    const modal = new bootstrap.Modal(
      document.getElementById("analytics-modal")
    );
    modal.show();

    // Initialize charts after modal is shown
    setTimeout(() => {
      this.initializeCharts();
    }, 300);
  }

  initializeCharts() {
    // This would typically use Chart.js or similar library
    // For demo purposes, we'll create placeholder charts
    this.createStatusChart();
    this.createTrendsChart();
    this.createTopProductsList();
    this.createRecentActivityList();
  }

  createStatusChart() {
    const canvas = document.getElementById("status-chart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Simple pie chart representation
    const statusCounts = {
      active: this.licenses.filter((l) => l.status === "active").length,
      expired: this.licenses.filter((l) => l.status === "expired").length,
      suspended: this.licenses.filter((l) => l.status === "suspended").length,
      pending: this.licenses.filter((l) => l.status === "pending").length,
    };

    // Clear canvas and draw placeholder
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#64748b";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "Status Distribution Chart",
      canvas.width / 2,
      canvas.height / 2 - 20
    );
    ctx.fillText(
      `Active: ${statusCounts.active} | Expired: ${statusCounts.expired}`,
      canvas.width / 2,
      canvas.height / 2 + 10
    );
    ctx.fillText(
      `Suspended: ${statusCounts.suspended} | Pending: ${statusCounts.pending}`,
      canvas.width / 2,
      canvas.height / 2 + 30
    );
  }

  createTrendsChart() {
    const canvas = document.getElementById("trends-chart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Clear canvas and draw placeholder
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#64748b";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "Monthly Trends Chart",
      canvas.width / 2,
      canvas.height / 2 - 10
    );
    ctx.fillText(
      "(Line chart showing license creation trends)",
      canvas.width / 2,
      canvas.height / 2 + 10
    );
  }

  createTopProductsList() {
    const container = document.getElementById("top-products-list");
    if (!container) return;

    const productCounts = {};
    this.licenses.forEach((license) => {
      productCounts[license.product] =
        (productCounts[license.product] || 0) + 1;
    });

    const sortedProducts = Object.entries(productCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    container.innerHTML = sortedProducts
      .map(
        ([product, count], index) => `
            <div class="flex items-center justify-between py-2 ${
              index < sortedProducts.length - 1
                ? "border-b border-slate-200"
                : ""
            }">
                <div>
                    <div class="font-medium">${product}</div>
                    <div class="text-slate-500 text-sm">${count} licenses</div>
                </div>
                <div class="text-right">
                    <div class="font-medium">#${index + 1}</div>
                </div>
            </div>
        `
      )
      .join("");
  }

  createRecentActivityList() {
    const container = document.getElementById("recent-activity-list");
    if (!container) return;

    const recentActivities = [
      {
        time: "2 minutes ago",
        action: "License created",
        user: "Admin",
        type: "success",
      },
      {
        time: "15 minutes ago",
        action: "License extended",
        user: "System",
        type: "info",
      },
      {
        time: "1 hour ago",
        action: "License suspended",
        user: "Admin",
        type: "warning",
      },
      {
        time: "3 hours ago",
        action: "License activated",
        user: "User",
        type: "success",
      },
      {
        time: "1 day ago",
        action: "License expired",
        user: "System",
        type: "danger",
      },
    ];

    container.innerHTML = recentActivities
      .map(
        (activity, index) => `
            <div class="flex items-center justify-between py-2 ${
              index < recentActivities.length - 1
                ? "border-b border-slate-200"
                : ""
            }">
                <div class="flex items-center">
                    <div class="w-2 h-2 rounded-full bg-${
                      activity.type === "success"
                        ? "green"
                        : activity.type === "warning"
                        ? "yellow"
                        : activity.type === "danger"
                        ? "red"
                        : "blue"
                    }-500 mr-3"></div>
                    <div>
                        <div class="font-medium text-sm">${
                          activity.action
                        }</div>
                        <div class="text-slate-500 text-xs">by ${
                          activity.user
                        }</div>
                    </div>
                </div>
                <div class="text-slate-500 text-xs">${activity.time}</div>
            </div>
        `
      )
      .join("");
  }

  // Utility functions
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  getDaysUntilExpiry(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  showNotification(message, type = "info") {
    // Remove existing notifications
    document.querySelectorAll(".notification").forEach((n) => n.remove());

    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    // Auto hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);

    // Reinitialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

// Initialize the license manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.licenseManager = new LicenseManager();
});
