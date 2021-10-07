using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class CoursePageDataTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CoursesPages",
                columns: table => new
                {
                    Crs_Id = table.Column<int>(type: "int", nullable: false),
                    Pg_Id = table.Column<int>(type: "int", nullable: false),
                    CourseCrs_Id = table.Column<int>(type: "int", nullable: true),
                    PagePg_Id = table.Column<int>(type: "int", nullable: true),
                    Order = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesPages", x => new { x.Crs_Id, x.Pg_Id });
                    table.ForeignKey(
                        name: "FK_CoursesPages_Courses_CourseCrs_Id",
                        column: x => x.CourseCrs_Id,
                        principalTable: "Courses",
                        principalColumn: "Crs_Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CoursesPages_Pages_PagePg_Id",
                        column: x => x.PagePg_Id,
                        principalTable: "Pages",
                        principalColumn: "Pg_Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_CourseCrs_Id",
                table: "CoursesPages",
                column: "CourseCrs_Id");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_PagePg_Id",
                table: "CoursesPages",
                column: "PagePg_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoursesPages");
        }
    }
}
